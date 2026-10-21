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

    renderLearningArea();

    console.log("CodeCraft Academy learning system is ready.");
});
