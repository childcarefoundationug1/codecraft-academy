// CodeCraft Academy — Interactive Learning System

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const lessons = [
        {
            id: "python",
            title: "Python Basics",
            icon: "🐍",
            description: "Learn variables and display your first message.",
            explanation: `
                <h3>What is Python?</h3>
                <p>Python is a programming language used to build applications,
                automate tasks, analyse data, and create many other tools.</p>
                <h3>Your first Python example</h3>
                <pre><code>name = "Alex"
print("Hello", name)</code></pre>
                <p><strong>Variables</strong> store information. In this example,
                the variable <code>name</code> stores the text "Alex". The
                <code>print()</code> function displays information.</p>
            `,
            question: "Which Python command displays a message?",
            options: ["show('Hello')", "print('Hello')", "display = Hello"],
            answer: 1,
            success: "Correct! print() displays information in Python."
        },
        {
            id: "web",
            title: "Web Development",
            icon: "🌐",
            description: "Learn HTML and create the structure of a webpage.",
            explanation: `
                <h3>What is HTML?</h3>
                <p>HTML stands for HyperText Markup Language. It structures
                the content displayed on a webpage.</p>
                <h3>Your first HTML example</h3>
                <pre><code>&lt;h1&gt;Hello, world!&lt;/h1&gt;
&lt;p&gt;Welcome to my website.&lt;/p&gt;</code></pre>
                <p>The <code>&lt;h1&gt;</code> element creates a main heading.
                The <code>&lt;p&gt;</code> element creates a paragraph.</p>
            `,
            question: "Which HTML element creates a main heading?",
            options: ["<p>", "<h1>", "<image>"],
            answer: 1,
            success: "Correct! The h1 element represents a main heading."
        },
        {
            id: "software",
            title: "Software Development",
            icon: "💡",
            description: "Understand algorithms and logical problem-solving.",
            explanation: `
                <h3>What is software development?</h3>
                <p>Software development is the process of planning, building,
                testing, and maintaining computer programs.</p>
                <h3>What is an algorithm?</h3>
                <p>An algorithm is a clear sequence of steps for solving a
                problem.</p>
                <pre><code>1. Start
2. Ask for two numbers
3. Add the numbers
4. Display the result
5. Stop</code></pre>
                <p>Developers break complex problems into smaller steps
                before writing and testing code.</p>
            `,
            question: "What is an algorithm?",
            options: [
                "A sequence of steps to solve a problem",
                "A computer screen",
                "A type of keyboard"
            ],
            answer: 0,
            success: "Correct! An algorithm describes steps for solving a problem."
        }
    ];

    const storageKey = "codecraft-academy-progress-v1";

    function readProgress() {
        try {
            return JSON.parse(localStorage.getItem(storageKey)) || {};
        } catch {
            return {};
        }
    }

    function saveProgress(progress) {
        try {
            localStorage.setItem(storageKey, JSON.stringify(progress));
            return true;
        } catch {
            return false;
        }
    }

    function renderLearningArea() {
        if (document.getElementById("learning-dashboard")) return;

        const coursesSection = document.getElementById("courses");
        if (!coursesSection) {
            console.error("CodeCraft Academy: courses section not found.");
            return;
        }

        const dashboard = document.createElement("section");
        dashboard.id = "learning-dashboard";
        dashboard.className = "learning-dashboard";
        dashboard.innerHTML = `
            <p class="tagline">LEARN BY DOING</p>
            <h2>Interactive Learning Lab</h2>
            <p class="section-description">
                Choose a lesson, study the example, and answer the quiz.
                Your completed lessons are saved on this device.
            </p>
            <div class="learning-progress">
                <p id="progress-label">Your progress: 0 of ${lessons.length} lessons completed</p>
                <div class="progress-track">
                    <div id="progress-bar" class="progress-bar"></div>
                </div>
            </div>
            <div id="lesson-grid" class="course-grid"></div>
            <div id="lesson-viewer" class="lesson-viewer" hidden></div>
        `;

        coursesSection.insertAdjacentElement("afterend", dashboard);

        const grid = dashboard.querySelector("#lesson-grid");

        lessons.forEach((lesson, index) => {
            const card = document.createElement("article");
            card.className = "course-card learning-card";
            card.innerHTML = `
                <div class="course-icon">${lesson.icon}</div>
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
                <span class="level" id="status-${lesson.id}">NOT STARTED</span>
                <button class="button lesson-open" type="button"
                    data-lesson="${lesson.id}">Open Lesson ${index + 1}</button>
            `;
            grid.appendChild(card);
        });

        grid.addEventListener("click", event => {
            const button = event.target.closest("[data-lesson]");
            if (!button) return;
            const lesson = lessons.find(item => item.id === button.dataset.lesson);
            if (lesson) openLesson(lesson);
        });

        updateProgress();
    }

    function updateProgress() {
        const progress = readProgress();
        const completed = lessons.filter(lesson => progress[lesson.id]?.completed).length;
        const label = document.getElementById("progress-label");
        const bar = document.getElementById("progress-bar");

        if (label) {
            label.textContent =
                `Your progress: ${completed} of ${lessons.length} lessons completed`;
        }

        if (bar) {
            bar.style.width = `${(completed / lessons.length) * 100}%`;
        }

        lessons.forEach(lesson => {
            const status = document.getElementById(`status-${lesson.id}`);
            if (status) {
                status.textContent = progress[lesson.id]?.completed
                    ? "COMPLETED ✓"
                    : "NOT STARTED";
            }
        });
    }

    function openLesson(lesson) {
        const viewer = document.getElementById("lesson-viewer");
        if (!viewer) return;

        viewer.hidden = false;
        viewer.innerHTML = `
            <h2>${lesson.icon} ${lesson.title}</h2>
            <div class="lesson-content">${lesson.explanation}</div>
            <div class="lesson-quiz">
                <h3>Quick Quiz</h3>
                <p>${lesson.question}</p>
                <form id="quiz-form">
                    ${lesson.options.map((option, index) => `
                        <label class="quiz-option">
                            <input type="radio" name="answer" value="${index}" required>
                            <span>${escapeHTML(option)}</span>
                        </label>
                    `).join("")}
                    <button class="button" type="submit">Check Answer</button>
                </form>
                <p id="quiz-feedback" role="status" aria-live="polite"></p>
            </div>
            <button class="button lesson-close" type="button">Close Lesson</button>
        `;

        viewer.querySelector("#quiz-form").addEventListener("submit", event => {
            event.preventDefault();
            const chosen = Number(new FormData(event.currentTarget).get("answer"));
            const feedback = viewer.querySelector("#quiz-feedback");

            if (chosen === lesson.answer) {
                feedback.textContent = lesson.success;
                feedback.className = "quiz-correct";

                const progress = readProgress();
                progress[lesson.id] = {
                    completed: true,
                    completedAt: new Date().toISOString()
                };

                if (!saveProgress(progress)) {
                    feedback.textContent +=
                        " Your browser could not save progress on this device.";
                }

                updateProgress();
            } else {
                feedback.textContent = "Not quite. Review the lesson and try again.";
                feedback.className = "quiz-incorrect";
            }
        });

        viewer.querySelector(".lesson-close").addEventListener("click", () => {
            viewer.hidden = true;
        });

        viewer.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function escapeHTML(value) {
        return value.replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
    }


    function renderAchievements() {
        const dashboard = document.getElementById("learning-dashboard");
        if (!dashboard) return;

        let panel = document.getElementById("achievements-panel");

        if (!panel) {
            panel = document.createElement("section");
            panel.id = "achievements-panel";
            panel.className = "achievements-panel";
            panel.setAttribute("aria-labelledby", "achievements-title");
            panel.innerHTML = `
                <p class="tagline">CELEBRATE YOUR PROGRESS</p>
                <h2 id="achievements-title">🏆 Your Achievements</h2>
                <p class="achievements-description">
                    Every lesson you complete brings you closer to your goals.
                    Keep learning and collect your badges!
                </p>
                <div class="achievement-grid">
                    <article class="achievement-card" data-badge="first">
                        <div class="achievement-icon" aria-hidden="true">🌱</div>
                        <h3>First Steps</h3>
                        <p>Complete your first lesson.</p>
                        <span class="achievement-status"></span>
                    </article>
                    <article class="achievement-card" data-badge="rising">
                        <div class="achievement-icon" aria-hidden="true">🔥</div>
                        <h3>Rising Developer</h3>
                        <p>Complete two lessons.</p>
                        <span class="achievement-status"></span>
                    </article>
                    <article class="achievement-card" data-badge="champion">
                        <div class="achievement-icon" aria-hidden="true">👑</div>
                        <h3>Learning Champion</h3>
                        <p>Complete all three current lessons.</p>
                        <span class="achievement-status"></span>
                    </article>
                </div>
                <p id="achievement-summary" class="achievement-summary"
                   role="status" aria-live="polite"></p>
            `;

            dashboard.insertAdjacentElement("afterend", panel);
        }

        let progress = {};

        try {
            progress = JSON.parse(
                localStorage.getItem("codecraft-academy-progress-v1") || "{}"
            ) || {};
        } catch (error) {
            console.warn("Could not read saved learning progress.", error);
        }

        const lessonIds = ["python", "web", "software"];
        const completedCount = lessonIds.filter(
            id => progress[id] && progress[id].completed
        ).length;

        const unlocked = {
            first: completedCount >= 1,
            rising: completedCount >= 2,
            champion: completedCount >= 3
        };

        panel.querySelectorAll(".achievement-card").forEach(card => {
            const isUnlocked = unlocked[card.dataset.badge];
            card.classList.toggle("is-unlocked", isUnlocked);

            const status = card.querySelector(".achievement-status");
            status.textContent = isUnlocked ? "✓ Unlocked" : "🔒 Locked";
        });

        const summary = panel.querySelector("#achievement-summary");
        summary.textContent =
            `${Object.values(unlocked).filter(Boolean).length} of 3 achievements unlocked. ` +
            `${completedCount} of ${lessonIds.length} lessons completed.`;
    }


    renderLearningArea();
    renderAchievements();

    // Refresh achievements after quiz submissions, including saved progress.
    document.addEventListener("submit", event => {
        if (event.target && event.target.id === "quiz-form") {
            setTimeout(renderAchievements, 0);
        }
    });

    console.log("CodeCraft Academy learning system is ready.");
});
