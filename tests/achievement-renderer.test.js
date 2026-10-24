"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const { test } = require("node:test");

const source = fs.readFileSync("script.js", "utf8");

function loadActualLessons() {
    const start = source.indexOf("const lessons = [");

    if (start === -1) {
        throw new Error("Could not find the actual lesson definitions.");
    }

    const endMarker = "\n    ];";
    const end = source.indexOf(endMarker, start);

    if (end === -1) {
        throw new Error("Could not find the end of the lesson definitions.");
    }

    const declaration = source.slice(start, end + endMarker.length);

    return vm.runInNewContext(
        `(() => { ${declaration}; return lessons; })()`
    );
}

function createEnvironment(savedProgress = {}) {
    const lessons = loadActualLessons();

    const cards = ["first", "rising", "champion"].map(badge => {
        const classes = new Set();

        return {
            dataset: { badge },
            classes,
            classList: {
                toggle(name, enabled) {
                    if (enabled) {
                        classes.add(name);
                    } else {
                        classes.delete(name);
                    }
                },
                contains(name) {
                    return classes.has(name);
                }
            },
            status: { textContent: "" },
            querySelector(selector) {
                return selector === ".achievement-status"
                    ? this.status
                    : null;
            }
        };
    });

    const summary = { textContent: "" };
    let currentPanel = null;

    const panel = {
        id: "",
        className: "",
        attributes: {},
        innerHTML: "",

        setAttribute(name, value) {
            this.attributes[name] = value;
        },

        querySelectorAll(selector) {
            return selector === ".achievement-card" ? cards : [];
        },

        querySelector(selector) {
            return selector === "#achievement-summary"
                ? summary
                : null;
        }
    };

    const dashboard = {
        insertAdjacentElement(position, element) {
            currentPanel = element;
        }
    };

    const document = {
        getElementById(id) {
            if (id === "learning-dashboard") return dashboard;
            if (id === "achievements-panel") return currentPanel;
            return null;
        },

        createElement(tag) {
            assert.equal(tag, "section");
            return panel;
        }
    };

    const localStorage = {
        getItem(key) {
            assert.equal(key, "codecraft-academy-progress-v1");
            return JSON.stringify(savedProgress);
        }
    };

    const context = vm.createContext({
        document,
        localStorage,
        lessons,
        console
    });

    const functionStart = source.indexOf("function renderAchievements() {");

    if (functionStart === -1) {
        throw new Error("Could not find the actual achievement renderer.");
    }

    const functionEndMarker = "\n\n\n    renderLearningArea();";
    const functionEnd = source.indexOf(functionEndMarker, functionStart);

    if (functionEnd === -1) {
        throw new Error("Could not isolate the achievement renderer.");
    }

    const actualFunction = source.slice(functionStart, functionEnd);

    vm.runInContext(actualFunction, context);

    return {
        render: () => context.renderAchievements(),
        cards,
        summary,
        panel: () => currentPanel,
        lessons
    };
}

function completedLessons(ids) {
    return Object.fromEntries(
        ids.map(id => [id, { completed: true }])
    );
}

function badgeState(environment, badge) {
    const card = environment.cards.find(
        item => item.dataset.badge === badge
    );

    assert.ok(card, `Missing badge: ${badge}`);

    return {
        unlocked: card.classList.contains("is-unlocked"),
        status: card.status.textContent
    };
}

test("actual renderer locks all badges with no completed lessons", () => {
    const env = createEnvironment();

    env.render();

    for (const badge of ["first", "rising", "champion"]) {
        assert.deepEqual(badgeState(env, badge), {
            unlocked: false,
            status: "🔒 Locked"
        });
    }

    assert.match(env.summary.textContent, /0 of 5 lessons completed/);
});

test("actual renderer unlocks First Steps after one lesson", () => {
    const env = createEnvironment(completedLessons(["what-is-programming"]));

    env.render();

    assert.equal(badgeState(env, "first").unlocked, true);
    assert.equal(badgeState(env, "first").status, "✓ Unlocked");

    assert.equal(badgeState(env, "rising").unlocked, false);
    assert.equal(badgeState(env, "champion").unlocked, false);

    assert.match(env.summary.textContent, /1 of 5 lessons completed/);
});

test("actual renderer unlocks Rising Developer after two lessons", () => {
    const env = createEnvironment(
        completedLessons(["python", "web"])
    );

    env.render();

    assert.equal(badgeState(env, "first").unlocked, true);
    assert.equal(badgeState(env, "rising").unlocked, true);
    assert.equal(badgeState(env, "champion").unlocked, false);
});

test("actual renderer unlocks Learning Champion after all lessons", () => {
    const env = createEnvironment(
        completedLessons(["what-is-programming", "how-computers-execute-instructions", "python", "web", "software"])
    );

    env.render();

    assert.equal(badgeState(env, "first").unlocked, true);
    assert.equal(badgeState(env, "rising").unlocked, true);
    assert.equal(badgeState(env, "champion").unlocked, true);

    assert.match(env.summary.textContent, /5 of 5 lessons completed/);
});

test("actual renderer ignores completion records for unknown lessons", () => {
    const env = createEnvironment({
        unknownLesson: { completed: true }
    });

    env.render();

    assert.match(env.summary.textContent, /0 of 5 lessons completed/);
    assert.equal(badgeState(env, "first").unlocked, false);
});

test("actual renderer creates an accessible achievement panel", () => {
    const env = createEnvironment();

    env.render();

    assert.ok(env.panel(), "Achievement panel should be created");
    assert.equal(env.panel().id, "achievements-panel");
    assert.equal(
        env.panel().attributes["aria-labelledby"],
        "achievements-title"
    );

    assert.match(env.panel().innerHTML, /Learning Champion/);
    assert.match(env.panel().innerHTML, /aria-live="polite"/);
});

test("actual renderer reuses its existing panel", () => {
    const env = createEnvironment();

    env.render();
    const originalPanel = env.panel();

    env.render();

    assert.equal(env.panel(), originalPanel);
});
