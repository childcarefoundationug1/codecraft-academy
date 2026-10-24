"use strict";

const assert = require("node:assert/strict");

const PASS_PERCENTAGE = 70;

function evaluateQuiz(score, totalQuestions, previousProgress = {}) {
    if (
        !Number.isInteger(score) ||
        !Number.isInteger(totalQuestions) ||
        totalQuestions <= 0 ||
        score < 0 ||
        score > totalQuestions
    ) {
        throw new Error("Invalid quiz score");
    }

    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= PASS_PERCENTAGE;

    const progress = { ...previousProgress };

    if (passed) {
        progress.lesson = {
            completed: true,
            score,
            totalQuestions,
            percentage
        };
    }

    return { percentage, passed, progress };
}

function test(name, callback) {
    try {
        callback();
        console.log(`PASS: ${name}`);
    } catch (error) {
        console.error(`FAIL: ${name}`);
        console.error(error.message);
        process.exitCode = 1;
    }
}

test("0 of 3 answers does not pass", () => {
    const result = evaluateQuiz(0, 3);
    assert.equal(result.percentage, 0);
    assert.equal(result.passed, false);
    assert.equal(result.progress.lesson, undefined);
});

test("2 of 3 answers does not pass the 70% requirement", () => {
    const result = evaluateQuiz(2, 3);
    assert.equal(result.percentage, 67);
    assert.equal(result.passed, false);
});

test("3 of 3 answers passes", () => {
    const result = evaluateQuiz(3, 3);
    assert.equal(result.percentage, 100);
    assert.equal(result.passed, true);
    assert.equal(result.progress.lesson.completed, true);
});

test("7 of 10 answers passes at exactly 70%", () => {
    const result = evaluateQuiz(7, 10);
    assert.equal(result.percentage, 70);
    assert.equal(result.passed, true);
});

test("failed retry preserves previous completion", () => {
    const previous = {
        lesson: {
            completed: true,
            score: 10,
            totalQuestions: 10,
            percentage: 100
        }
    };

    const result = evaluateQuiz(2, 3, previous);

    assert.equal(result.passed, false);
    assert.equal(result.progress.lesson.completed, true);
    assert.equal(result.progress.lesson.percentage, 100);
});

test("invalid scores are rejected", () => {
    assert.throws(() => evaluateQuiz(-1, 3), /Invalid quiz score/);
    assert.throws(() => evaluateQuiz(4, 3), /Invalid quiz score/);
    assert.throws(() => evaluateQuiz(0, 0), /Invalid quiz score/);
});

if (process.exitCode) {
    console.error("\nSome quiz-rule tests failed.");
} else {
    console.log("\nAll quiz-rule tests passed.");
}

function calculateAchievements(completedCount, totalLessons) {
    return {
        first: completedCount >= 1,
        rising: completedCount >= 2,
        champion: totalLessons > 0 && completedCount >= totalLessons
    };
}

test("no achievements unlock when no lessons are completed", () => {
    const result = calculateAchievements(0, 3);
    assert.deepEqual(result, {
        first: false,
        rising: false,
        champion: false
    });
});

test("first achievement unlocks after one lesson", () => {
    const result = calculateAchievements(1, 3);
    assert.equal(result.first, true);
    assert.equal(result.rising, false);
    assert.equal(result.champion, false);
});

test("rising achievement unlocks after two lessons", () => {
    const result = calculateAchievements(2, 3);
    assert.equal(result.first, true);
    assert.equal(result.rising, true);
    assert.equal(result.champion, false);
});

test("champion unlocks only after every current lesson", () => {
    assert.equal(calculateAchievements(2, 3).champion, false);
    assert.equal(calculateAchievements(3, 3).champion, true);
});

test("champion supports an expanded curriculum", () => {
    assert.equal(calculateAchievements(3, 10).champion, false);
    assert.equal(calculateAchievements(10, 10).champion, true);
});
