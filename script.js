// CodeCraft Academy — Interactive Learning System

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const lessons = [
        {
            id: "what-is-programming",
            title: "Lesson 1: What Is Programming?",
            icon: "💻",
            description: "Discover programming, algorithms, and your first Python program.",
            explanation: `
                <article class="lesson-chapter">
                    <p class="lesson-kicker">INTRODUCTION TO PROGRAMMING · LESSON 1 · FREE</p>

                    <h3>Welcome to programming</h3>
                    <p>Programming is the process of writing instructions that a computer can follow to perform a task. These instructions are written using a programming language. You do not need to know everything before you begin. You can build your skills by learning one idea, practising it, and gradually taking on more difficult problems.</p>
                    <p>The goal is not simply to memorise code. It is to understand what the code means, why it works, and how to improve it.</p>

                    <h3>What you will learn</h3>
                    <ul>
                        <li>Explain programming in your own words.</li>
                        <li>Distinguish programs, programming languages, and programmers.</li>
                        <li>Understand input, processing, and output.</li>
                        <li>Plan a solution using an algorithm.</li>
                        <li>Read and modify a simple Python program.</li>
                    </ul>

                    <h3>1. What is programming?</h3>
                    <p>Imagine giving someone directions to a classroom: walk forward, turn left at the shop, and stop at the blue door. These are instructions. Programming uses the same basic idea, but instructions must be written in a form a computer can interpret.</p>
                    <p>Computers execute instructions quickly, but they cannot reliably guess what you intended. Instructions need to be clear, precise, and arranged in the correct order.</p>
                    <div class="lesson-callout"><strong>Key idea:</strong> Programming means creating, testing, and improving instructions that help a computer perform useful tasks.</div>

                    <h3>2. Where do we use programs?</h3>
                    <p>Software helps people communicate, learn, work, travel, and manage information.</p>
                    <ul>
                        <li><strong>Communication:</strong> messaging and video calls.</li>
                        <li><strong>Business:</strong> calculating prices and tracking stock.</li>
                        <li><strong>Education:</strong> displaying lessons and saving progress.</li>
                        <li><strong>Transport:</strong> planning routes and estimating journeys.</li>
                        <li><strong>Science:</strong> analysing measurements and testing models.</li>
                    </ul>
                    <p>CodeCraft Academy itself is software: it uses code to display courses and provide a learning experience.</p>

                    <h3>3. Three important terms</h3>
                    <ul>
                        <li><strong>Program:</strong> instructions that perform a task.</li>
                        <li><strong>Programming language:</strong> a structured language used to write instructions, such as Python or JavaScript.</li>
                        <li><strong>Programmer:</strong> someone who creates, tests, or maintains software.</li>
                    </ul>
                    <p>A recipe provides a useful comparison: it describes steps that a cook follows to prepare a meal. A computer program also relies on instructions, although computers require instructions in forms they can process.</p>

                    <h3>4. Input, processing, and output</h3>
                    <p>Many programs can be understood through three stages.</p>
                    <div class="lesson-flow" aria-label="Input leads to processing, which produces output">
                        <div><strong>INPUT</strong><span>Information received</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>PROCESS</strong><span>Work performed</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>OUTPUT</strong><span>Result produced</span></div>
                    </div>
                    <p>Imagine a calculator:</p>
                    <ol>
                        <li><strong>Input:</strong> enter 4 and 3.</li>
                        <li><strong>Processing:</strong> add the numbers.</li>
                        <li><strong>Output:</strong> display 7.</li>
                    </ol>
                    <p>This simple model is useful for understanding many larger programs.</p>

                    <h3>5. Algorithms: plan before coding</h3>
                    <p>An <strong>algorithm</strong> is a sequence of steps for solving a problem. Programmers often plan a solution before writing code.</p>
                    <p><strong>Problem:</strong> find the total price of two items.</p>
                    <pre><code>1. Start
2. Get the price of item A
3. Get the price of item B
4. Add the prices
5. Display the total
6. Stop</code></pre>
                    <p>Order matters. We cannot correctly display the total before calculating it. Planning first makes it easier to turn an idea into a program.</p>

                    <h3>6. Your first Python program</h3>
                    <p>Python is a popular programming language with readable syntax. Here is a small program:</p>
                    <pre><code>print("Hello, CodeCraft Academy!")
print("I am learning to program.")</code></pre>
                    <p>Let's examine it line by line:</p>
                    <ul>
                        <li><code>print()</code> is a built-in Python function that displays information.</li>
                        <li>Text enclosed in quotation marks is called a <strong>string</strong>.</li>
                        <li>The parentheses contain the information to display.</li>
                        <li>The first line runs before the second line, so the messages appear in order.</li>
                    </ul>
                    <p><strong>Expected output:</strong></p>
                    <pre><code>Hello, CodeCraft Academy!
I am learning to program.</code></pre>
                    <p>Try changing the words inside the quotation marks. Keep the quotation marks and parentheses, then run the program again. Observe how the output changes.</p>

                    <h3>7. Guided practice: welcome a student</h3>
                    <p><strong>Task:</strong> create a program that welcomes a student by name.</p>
                    <ol>
                        <li>Input: the student's name.</li>
                        <li>Processing: combine the name with a greeting.</li>
                        <li>Output: display the completed greeting.</li>
                    </ol>
                    <p>One possible solution is:</p>
                    <pre><code>name = "Amina"
print("Welcome, " + name + "!")</code></pre>
                    <p>The first line stores text in a variable named <code>name</code>. The second line joins the greeting, the stored name, and the exclamation mark.</p>
                    <p><strong>Expected output:</strong></p>
                    <pre><code>Welcome, Amina!</code></pre>
                    <p>Change <code>"Amina"</code> to another name. Predict the output before running the program, then check your prediction.</p>

                    <h3>8. Common beginner mistakes</h3>
                    <ul>
                        <li><strong>Missing quotation marks:</strong> text such as <code>"Hello"</code> needs matching quotation marks.</li>
                        <li><strong>Misspelling a command:</strong> Python recognises <code>print</code>, not <code>pritn</code>.</li>
                        <li><strong>Changing too many things at once:</strong> change one part, run the program, and observe the result.</li>
                        <li><strong>Expecting the computer to guess:</strong> make your instructions clear.</li>
                        <li><strong>Giving up when an error appears:</strong> read the message, check the relevant line, and try again. Debugging is a normal part of programming.</li>
                    </ul>

                    <h3>9. Independent practice</h3>
                    <p>Write a Python program that displays three lines: your name, something you want to build, and the sentence “I can learn step by step.”</p>
                    <p>Example solution:</p>
                    <pre><code>print("My name is Amina.")
print("I want to build a useful app.")
print("I can learn step by step.")</code></pre>
                    <p>Replace the example details with your own. Your wording can be different as long as your program displays the three messages you intended.</p>

                    <h3>Lesson summary</h3>
                    <ul>
                        <li>Programming is creating and improving instructions for computers.</li>
                        <li>Programs use programming languages such as Python.</li>
                        <li>Many programs receive input, process it, and produce output.</li>
                        <li>An algorithm describes ordered steps for solving a problem.</li>
                        <li>Python's <code>print()</code> function displays information.</li>
                        <li>Testing and fixing errors are normal parts of learning.</li>
                    </ul>
                    <div class="lesson-callout"><strong>Your next step:</strong> Read the example, predict what it will do, run it when you can, and change one small thing. Consistent practice builds programming skill.</div>
                </article>
            `,
            question: "What is programming?",
            options: [
                "Creating and improving instructions a computer can follow",
                "Only repairing physical computer parts",
                "Using a computer without giving it instructions"
            ],
            answer: 0,
            success: "Programming involves creating and improving instructions that help computers perform tasks."
        },

        {
            id: "how-computers-execute-instructions",
            title: "Lesson 2: How Computers Execute Instructions",
            icon: "⚙️",
            description: "Discover how a computer receives instructions, processes data, and produces results.",
            explanation: `
                <article class="lesson-chapter">
                    <p class="lesson-kicker">INTRODUCTION TO PROGRAMMING · LESSON 2</p>

                    <h3>Welcome to Lesson 2</h3>
                    <p>In Lesson 1, you learned that programming means creating instructions a computer can follow. Now let's explore what happens when those instructions are run.</p>
                    <p>Understanding this process helps you write better programs, recognise errors, and solve problems with confidence.</p>

                    <h3>What you will learn</h3>
                    <ul>
                        <li>Explain how a computer follows program instructions.</li>
                        <li>Understand the roles of hardware and software.</li>
                        <li>Describe how input becomes output through processing.</li>
                        <li>Understand why the order of instructions matters.</li>
                        <li>Recognise syntax errors and logical errors.</li>
                    </ul>

                    <h3>1. A computer follows instructions</h3>
                    <p>Imagine following a recipe. You read a step, carry it out, and then move to the next step. A computer also carries out instructions, but it processes them using electronic hardware and software.</p>
                    <p>When you run a program, the computer uses its operating system and other software to load and execute the program's instructions. The exact process depends on the programming language and the computer system.</p>
                    <div class="lesson-callout"><strong>Key idea:</strong> A computer does not understand your intention automatically. The program must provide instructions in a form the system can execute.</div>

                    <h3>2. Hardware and software work together</h3>
                    <p>A computer system includes physical components and the programs that tell those components what work to perform.</p>
                    <ul>
                        <li><strong>Hardware:</strong> physical parts such as the processor, memory, storage, keyboard, and screen.</li>
                        <li><strong>Software:</strong> programs and instructions, including applications and the operating system.</li>
                        <li><strong>Processor (CPU):</strong> executes machine instructions and performs operations.</li>
                        <li><strong>Memory (RAM):</strong> temporarily holds data and instructions that programs are using.</li>
                        <li><strong>Storage:</strong> keeps files and programs when the computer is turned off.</li>
                    </ul>
                    <p>Think of a music player. The application is software, the processor executes instructions, memory holds information currently in use, and the speakers produce sound.</p>

                    <h3>3. From source code to execution</h3>
                    <p>Programmers often write source code using languages such as Python or JavaScript. The computer cannot directly execute every form of source code in the same way.</p>
                    <p>Depending on the language and environment, software may interpret the code, compile it into another form, or use a combination of techniques. The resulting instructions are carried out by the computer system.</p>
                    <div class="lesson-flow" aria-label="Write source code, prepare it for execution, execute instructions, observe results">
                        <div><strong>1. WRITE</strong><span>Create source code</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>2. PREPARE</strong><span>Interpret or compile</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>3. EXECUTE</strong><span>Carry out instructions</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>4. OBSERVE</strong><span>Check the result</span></div>
                    </div>
                    <p>This is a simplified learning model, not a universal sequence for every programming language.</p>

                    <h3>4. Follow instructions in order</h3>
                    <p>Look at this Python program:</p>
                    <pre><code>print("First")
print("Second")
print("Third")</code></pre>
                    <p>Each statement asks Python to display a message. In this example, the statements execute in order, so the output is:</p>
                    <pre><code>First
Second
Third</code></pre>
                    <p>Now imagine swapping the first and third statements. The order of the output changes too. Small changes in instruction order can affect what a program does.</p>

                    <h3>5. Input, processing, and output</h3>
                    <p>Many programs receive information, perform work on it, and produce a result.</p>
                    <div class="lesson-flow" aria-label="Input, processing, output">
                        <div><strong>INPUT</strong><span>Receive information</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>PROCESS</strong><span>Perform an operation</span></div>
                        <b aria-hidden="true">→</b>
                        <div><strong>OUTPUT</strong><span>Show a result</span></div>
                    </div>
                    <p>For example, a program can calculate the total price of two items:</p>
                    <pre><code>price_a = 1200
price_b = 800
total = price_a + price_b
print(total)</code></pre>
                    <p><strong>Expected output:</strong></p>
                    <pre><code>2000</code></pre>
                    <p>Here, the two prices are the data, the addition is the processing, and the displayed total is the output. The numbers are examples, and the same idea works with many other values.</p>

                    <h3>6. Why computers need precise instructions</h3>
                    <p>Computers follow the rules of the language and environment in which a program runs. They do not reliably correct an instruction simply because they can guess what you meant.</p>
                    <p>For example, this Python statement contains a spelling error:</p>
                    <pre><code>pritn("Hello")</code></pre>
                    <p>Python does not recognise <code>pritn</code> as the built-in <code>print</code> function. Correcting the spelling gives:</p>
                    <pre><code>print("Hello")</code></pre>
                    <p>When you see an error, read the message carefully and check the relevant part of your code. Finding and correcting problems is a normal part of programming.</p>

                    <h3>7. Two common types of errors</h3>
                    <p><strong>Syntax error:</strong> the code breaks a rule of the language, so it cannot be processed as intended.</p>
                    <pre><code>print("Hello"</code></pre>
                    <p>This example is missing a closing parenthesis.</p>
                    <p><strong>Logical error:</strong> the program runs, but the instructions produce the wrong result for the intended task.</p>
                    <pre><code>price_a = 1200
price_b = 800
total = price_a - price_b
print(total)</code></pre>
                    <p>This program performs subtraction instead of addition. It may run successfully, but it does not calculate the intended total.</p>
                    <div class="lesson-callout"><strong>Debugging tip:</strong> First check whether your code follows the language's rules. Then check whether the steps and calculations actually solve the problem.</div>

                    <h3>8. Guided practice: predict the output</h3>
                    <p>Before reading the answer, try to work out what this program displays:</p>
                    <pre><code>number = 5
number = number + 2
print(number)</code></pre>
                    <p>Read the statements in order:</p>
                    <ol>
                        <li>The first statement stores the value 5 in <code>number</code>.</li>
                        <li>The next statement adds 2 to the current value and stores the new value in <code>number</code>.</li>
                        <li>The final statement displays the current value.</li>
                    </ol>
                    <p><strong>Expected output:</strong></p>
                    <pre><code>7</code></pre>
                    <p>Try changing 5 to another number. Predict the new result before running the program.</p>

                    <h3>9. Independent practice</h3>
                    <p>Write a Python program that stores the numbers 10 and 4, calculates their sum, and displays the result.</p>
                    <p>One possible solution is:</p>
                    <pre><code>first_number = 10
second_number = 4
answer = first_number + second_number
print(answer)</code></pre>
                    <p><strong>Expected output:</strong></p>
                    <pre><code>14</code></pre>
                    <p>Now change the values and predict the result. Then deliberately replace <code>+</code> with <code>-</code>. Notice how the program can still run but produce a different result.</p>

                    <h3>Lesson summary</h3>
                    <ul>
                        <li>Programs contain instructions that a computer system executes.</li>
                        <li>Hardware and software work together to run programs.</li>
                        <li>Source code is interpreted, compiled, or otherwise prepared according to its environment.</li>
                        <li>Instruction order can change a program's output.</li>
                        <li>Many programs receive input, process data, and produce output.</li>
                        <li>Syntax errors and logical errors are different problems.</li>
                        <li>Testing, predicting results, and debugging help you improve your code.</li>
                    </ul>
                    <div class="lesson-callout"><strong>Your next step:</strong> Run a small program, predict what each line will do, and compare your prediction with the result. Learning to explain why a program behaves as it does is an important programming skill.</div>
                </article>
            `,
            question: "What is the main purpose of processing in a program?",
            options: [
                "To perform operations on data",
                "To permanently store every file",
                "To physically connect computer parts"
            ],
            answer: 0,
            success: "Processing means carrying out operations on data to help produce a result."
        },

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


    function setupCourseCatalogue(coursesSection) {
        if (!coursesSection) return;

        const catalogue = coursesSection.querySelector(".catalogue-grid");
        if (!catalogue) {
            console.error("CodeCraft Academy: course catalogue not found.");
            return;
        }

        // Keep every course visible. Search and category filters are intentionally removed.
        catalogue.querySelectorAll(".catalogue-card").forEach(card => {
            card.hidden = false;
        });

        coursesSection.querySelectorAll(".catalogue-level").forEach(level => {
            level.hidden = false;
        });

        coursesSection.querySelectorAll(
            ".course-catalogue-controls, .course-filter-status, .course-no-results"
        ).forEach(element => element.remove());

        coursesSection.dataset.categoriesReady = "true";
    }

    function renderLearningArea() {
        if (document.getElementById("learning-dashboard")) return;

        const coursesSection = document.getElementById("courses");
        if (!coursesSection) {
            console.error("CodeCraft Academy: courses section not found.");
            return;
        }

        setupCourseCatalogue(coursesSection);

        const dashboard = document.createElement("section");
        dashboard.id = "learning-dashboard";
        dashboard.className = "learning-dashboard";
        dashboard.innerHTML = `
            <div class="cc-dashboard-shell">
                <aside class="cc-sidebar" aria-label="Main navigation">
                    <a class="cc-brand" href="#home" aria-label="CodeCraft Academy home">
                        <img src="images/logo.png" alt="CodeCraft Academy logo">
                    </a>

                    <nav class="cc-side-nav" aria-label="Learning navigation">
                        <a href="#home" class="cc-nav-link is-active">
                            <span aria-hidden="true">⌂</span> Dashboard
                        </a>
                        <a href="#courses" class="cc-nav-link">
                            <span aria-hidden="true">▤</span> My Courses
                        </a>
                        <a href="#achievements" class="cc-nav-link">
                            <span aria-hidden="true">🏆</span> Achievements
                        </a>
                        <a href="#learning-dashboard" class="cc-nav-link">
                            <span aria-hidden="true">▥</span> Progress
                        </a>
                        <a href="#lesson-viewer" class="cc-nav-link">
                            <span aria-hidden="true">☑</span> Quizzes
                        </a>
                        <a href="#courses" class="cc-nav-link">
                            <span aria-hidden="true">▱</span> Resources
                        </a>
                    </nav>

                    <div class="cc-sidebar-note">
                        <span aria-hidden="true">✦</span>
                        <strong>Small steps every day lead to big results.</strong>
                        <p>— CodeCraft Academy</p>
                    </div>
                </aside>

                <div class="cc-dashboard-main" id="home">
                    <header class="cc-topbar">
                        <label class="cc-search">
                            <span aria-hidden="true">⌕</span>
                            <input id="cc-dashboard-search"
                                   type="search"
                                   placeholder="Search courses, lessons..."
                                   aria-label="Search courses and lessons">
                        </label>
                        <a class="cc-learner-pill" href="#learning-dashboard">
                            <span class="cc-avatar" aria-hidden="true">CC</span>
                            <span>Learner</span>
                        </a>
                    </header>

                    <div class="cc-dashboard-columns">
                        <main class="cc-learning-column">
                            <p class="tagline">YOUR LEARNING SPACE</p>
                            <h2>Welcome to CodeCraft Academy</h2>
                            <p class="section-description">
                                Learn step by step, practise your skills, and build real projects.
                            </p>

                            <section class="cc-featured-course" aria-labelledby="cc-feature-title">
                                <div class="cc-feature-copy">
                                    <span class="cc-feature-label">START BUILDING</span>
                                    <h3 id="cc-feature-title">Learn programming. Build your future.</h3>
                                    <p>Explore programming, web development, software engineering and technology.</p>
                                    <a class="button cc-primary-button" href="#courses">
                                        Explore Courses <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                                <div class="cc-feature-art" aria-hidden="true">
                                    <span class="cc-code-symbol">&lt;/&gt;</span>
                                    <span class="cc-feature-orbit"></span>
                                </div>
                            </section>

                            <section class="cc-progress-section" aria-label="Learning progress">
                                <div class="cc-section-heading">
                                    <h3>Your Learning Progress</h3>
                                    <span class="cc-small-label">ON THIS DEVICE</span>
                                </div>
                                <div class="learning-progress">
                                    <p id="progress-label">Your progress: 0 of ${lessons.length} lessons completed</p>
                                    <div class="progress-track">
                                        <div id="progress-bar" class="progress-bar"></div>
                                    </div>
                                </div>
                            </section>

                            <section class="cc-lessons-section" aria-label="Available lessons">
                                <div class="cc-section-heading">
                                    <h3>Continue Learning</h3>
                                    <a href="#courses">View courses →</a>
                                </div>
                                <div id="lesson-grid" class="course-grid"></div>
                            </section>

                            <div id="lesson-viewer" class="lesson-viewer" hidden></div>
                        </main>

                        <aside class="cc-right-rail" aria-label="Learning summary">
                            <section class="cc-summary-card">
                                <div class="cc-card-heading">
                                    <span class="cc-card-icon" aria-hidden="true">◎</span>
                                    <h3>Course Overview</h3>
                                </div>
                                <p>Build practical skills through guided lessons, examples, quizzes and projects.</p>
                                <div class="cc-summary-divider"></div>
                                <p>▤ &nbsp; 32 courses in the catalogue</p>
                                <p>◷ &nbsp; Learn at your own pace</p>
                                <p>▥ &nbsp; Track your progress</p>
                                <a class="button cc-primary-button cc-full-button" href="#courses">
                                    Continue Learning →
                                </a>
                            </section>

                            <section class="cc-summary-card cc-progress-card">
                                <div class="cc-card-heading">
                                    <span class="cc-card-icon" aria-hidden="true">◉</span>
                                    <h3>Your Progress</h3>
                                </div>
                                <div class="cc-progress-ring" aria-label="Learning progress">
                                    <span id="cc-progress-percent">0%</span>
                                </div>
                                <p id="cc-progress-summary">Keep going — every lesson counts.</p>
                                <div class="progress-track">
                                    <div id="cc-progress-bar" class="progress-bar"></div>
                                </div>
                            </section>

                            <section class="cc-summary-card" id="achievements">
                                <div class="cc-card-heading">
                                    <span class="cc-card-icon cc-trophy" aria-hidden="true">🏆</span>
                                    <h3>Course Achievements</h3>
                                </div>
                                <div class="cc-achievement-row">
                                    <span aria-hidden="true">🥇</span>
                                    <div><strong>First Steps</strong><p>Complete your first lesson</p></div>
                                </div>
                                <div class="cc-achievement-row">
                                    <span aria-hidden="true">🛡️</span>
                                    <div><strong>Rising Developer</strong><p>Keep building your skills</p></div>
                                </div>
                                <div class="cc-achievement-row">
                                    <span aria-hidden="true">🏆</span>
                                    <div><strong>Learning Champion</strong><p>Keep progressing through lessons</p></div>
                                </div>
                            </section>

                            <section class="cc-encouragement-card">
                                <span class="cc-encouragement-art" aria-hidden="true">🚩</span>
                                <h3>Keep going!</h3>
                                <p>Every lesson brings you closer to your goals. You can do it!</p>
                                <a href="#courses">View All Courses →</a>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
`;

        coursesSection.insertAdjacentElement("afterend", dashboard);


        // Each course opens its own curriculum before a lesson is selected.
        const courseCurriculum = document.createElement("section");
        courseCurriculum.id = "course-curriculum";
        courseCurriculum.className = "course-curriculum";
        courseCurriculum.hidden = true;
        courseCurriculum.setAttribute("aria-labelledby", "curriculum-title");

        courseCurriculum.innerHTML = `
            <button type="button" class="button curriculum-back">
                Back to All Courses
            </button>
            <p class="tagline">YOUR LEARNING PATH</p>
            <h2 id="curriculum-title"></h2>
            <p class="curriculum-description"></p>
            <div class="curriculum-progress" aria-live="polite"></div>
            <nav class="curriculum-toc" aria-label="Course table of contents">
                <h3>Topics in This Course</h3>
                <ol class="curriculum-toc-list"></ol>
            </nav>
            <div class="curriculum-module-list"></div>
            <button type="button" class="button curriculum-home">
                Return to Course Catalogue
            </button>
        `;

        dashboard.insertBefore(courseCurriculum, dashboard.firstChild);

        const lessonGrid = dashboard.querySelector("#lesson-grid");
        const lessonViewer = dashboard.querySelector("#lesson-viewer");


        // Load the authoritative course/module/lesson map.
        // Existing authored lesson content remains in the lessons array.
        let curriculumData = null;
        let activeCourseId = null;

        const courseDescriptions = {
            "introduction-to-programming":
                "Learn programming concepts and solve problems step by step.",
            "programming-fundamentals":
                "Build a strong foundation in programming logic and problem-solving.",
            "python-programming":
                "Learn Python through explanations, examples, and practice.",
            "web-development-fundamentals":
                "Learn the foundations of HTML, CSS, and web development."
        };

        function showCatalogue() {
            courseCurriculum.hidden = true;
            dashboard.hidden = true;

            if (lessonViewer) lessonViewer.hidden = true;
            if (lessonGrid) lessonGrid.hidden = true;

            coursesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        function findAuthoredLesson(curriculumLesson) {
            const title = curriculumLesson.title.trim().toLowerCase();

            const titleAliases = {
                "what programming is": "what-is-programming",
                "how computers execute instructions":
                    "how-computers-execute-instructions",
                "your first program": "python",
                "your first website": "web",
                "software development": "software"
            };

            const alias = titleAliases[title];
            if (alias) {
                const match = lessons.find(item => item.id === alias);
                if (match) return match;
            }

            return lessons.find(item =>
                item.title.trim().toLowerCase() === title
            ) || null;
        }

        function chooseInitialCourseLesson(availableLessons, savedLessonId) {
    return availableLessons.find(lesson => lesson.id === savedLessonId)
        || availableLessons[0]
        || null;
}

function shouldOpenScheduledCourseLesson(
    currentCourseId,
    expectedCourseId,
    curriculumHidden
) {
    return currentCourseId === expectedCourseId && !curriculumHidden;
}

function openCourse(courseId, card) {
            const cardTitle = card.querySelector("h3, h4, h2");
            const fallbackTitle = cardTitle
                ? cardTitle.textContent.trim()
                : courseId;

            const course = curriculumData?.courses?.find(
                item => item.id === courseId
            );

            activeCourseId = courseId;
            courseCurriculum.dataset.activeCourseId = courseId;

            courseCurriculum.querySelector("#curriculum-title").textContent =
                course?.title || fallbackTitle;

            courseCurriculum.querySelector(".curriculum-description")
                .textContent = courseDescriptions[courseId] ||
                "Follow this course's modules and lessons in the order shown.";

            const moduleList =
                courseCurriculum.querySelector(".curriculum-module-list");
            const progressText =
                courseCurriculum.querySelector(".curriculum-progress");
            const tocList =
                courseCurriculum.querySelector(".curriculum-toc-list");

            moduleList.replaceChildren();
            tocList.replaceChildren();

            if (!course) {
                const message = document.createElement("p");
                message.textContent =
                    "The curriculum could not be loaded. Please refresh and try again.";
                moduleList.appendChild(message);
                progressText.textContent = "Curriculum unavailable";
            } else {
                const progress = readProgress();
                let totalAuthored = 0;
                let completedAuthored = 0;
                let topicNumber = 0;

                course.modules.forEach((curriculumModule, moduleIndex) => {
                    const module = document.createElement("section");
                    module.className = "curriculum-module";
                    module.id = `course-module-${moduleIndex + 1}`;

                    const heading = document.createElement("h3");
                    heading.textContent =
                        `Module ${moduleIndex + 1}: ${curriculumModule.title}`;
                    module.appendChild(heading);

                    const moduleTocItem = document.createElement("li");
                    moduleTocItem.className = "curriculum-toc-module";
                    const moduleTocLink = document.createElement("a");
                    moduleTocLink.href = `#${module.id}`;
                    moduleTocLink.textContent = heading.textContent;
                    moduleTocItem.appendChild(moduleTocLink);
                    tocList.appendChild(moduleTocItem);

                    const lessonList = document.createElement("div");
                    lessonList.className = "curriculum-module-lessons";

                    curriculumModule.lessons.forEach(
                        (curriculumLesson) => {
                            topicNumber += 1;
                            const authored =
                                findAuthoredLesson(curriculumLesson);

                            const item = document.createElement("article");
                            item.className = "curriculum-lesson";
                            item.id = `course-topic-${topicNumber}`;

                            const topicTocItem = document.createElement("li");
                            topicTocItem.className = "curriculum-toc-topic";
                            const topicTocLink = document.createElement("a");
                            topicTocLink.href = `#${item.id}`;
                            topicTocLink.textContent =
                                `Topic ${topicNumber}: ${curriculumLesson.title}`;
                            topicTocItem.appendChild(topicTocLink);
                            tocList.appendChild(topicTocItem);

                            const details = document.createElement("div");
                            details.className = "curriculum-lesson-details";

                            const title = document.createElement("h4");
                            title.textContent =
                                `Topic ${topicNumber}: ${curriculumLesson.title}`;

                            const description = document.createElement("p");

                            if (authored) {
                                totalAuthored += 1;
                                if (progress[authored.id]?.completed) {
                                    completedAuthored += 1;
                                }

                                description.textContent =
                                    progress[authored.id]?.completed
                                        ? "Completed lesson"
                                        : "Lesson content available";
                            } else {
                                description.textContent =
                                    "Lesson planned — full teaching content is being prepared.";
                            }

                            details.append(title, description);

                            const button = document.createElement("button");
                            button.type = "button";
                            button.className = "button curriculum-open-lesson";
                            button.textContent = authored
                                ? "Open Lesson"
                                : "Content Coming Soon";

                            if (authored) {
                                button.dataset.lesson = authored.id;
                            } else {
                                button.disabled = true;
                            }

                            item.append(details, button);
                            lessonList.appendChild(item);
                        }
                    );

                    module.appendChild(lessonList);
                    moduleList.appendChild(module);
                });

                progressText.textContent = totalAuthored
                    ? `Progress: ${completedAuthored} of ${totalAuthored} available lessons completed`
                    : "Lesson content is being prepared";

                // Offer a resume button only when the saved lesson belongs
                // to this course and its teaching content is available.
                try {
                    const saved = JSON.parse(
                        localStorage.getItem("codecraftLastOpenLesson") || "null"
                    );

                    const availableLessons = course.modules.flatMap(module =>
                        module.lessons
                            .map(findAuthoredLesson)
                            .filter(Boolean)
                    );

                    const savedLesson = saved?.courseId === courseId
                        ? availableLessons.find(item =>
                            item.id === saved.lessonId
                        )
                        : null;

                    if (savedLesson) {
                        const resumeButton = document.createElement("button");
                        resumeButton.type = "button";
                        resumeButton.className =
                            "button curriculum-resume-lesson";
                        resumeButton.dataset.lesson = savedLesson.id;
                        resumeButton.textContent =
                            `▶ Resume Learning: ${savedLesson.title}`;
                        resumeButton.setAttribute(
                            "aria-label",
                            `Resume lesson: ${savedLesson.title}`
                        );

                        moduleList.prepend(resumeButton);
                    }
                } catch (error) {
                    console.warn(
                        "CodeCraft Academy could not read the saved lesson.",
                        error
                    );
                }
            }

            dashboard.hidden = false;
            courseCurriculum.hidden = false;

            if (lessonGrid) lessonGrid.hidden = true;
            if (lessonViewer) lessonViewer.hidden = true;

            courseCurriculum.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


        }

        fetch("curriculum/master-curriculum.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `Curriculum request failed: ${response.status}`
                    );
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data.courses)) {
                    throw new Error("Curriculum has no courses array");
                }

                curriculumData = data;
            })
            .catch(error => {
                console.error("CodeCraft Academy curriculum:", error);
                curriculumData = null;
            });

        coursesSection.querySelectorAll(".catalogue-card").forEach(card => {
            if (card.dataset.courseOpeningReady === "true") return;

            card.dataset.courseOpeningReady = "true";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");

            const courseId = card.dataset.course;

            card.setAttribute(
                "aria-label",
                `Open course: ${
                    card.querySelector("h3, h4, h2")?.textContent.trim()
                    || courseId
                }`
            );

            card.addEventListener("click", event => {
                if (event.target.closest("a, button")) return;
                if (!curriculumData) {
                    console.warn("Course curriculum is still loading.");
                    return;
                }
                openCourse(courseId, card);
            });

            card.addEventListener("keydown", event => {
                if (event.target !== card) return;

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (!curriculumData) {
                    console.warn("Course curriculum is still loading.");
                    return;
                }
                openCourse(courseId, card);
                }
            });
        });

        courseCurriculum.addEventListener("click", event => {
            if (event.target.closest(".curriculum-back, .curriculum-home")) {
                showCatalogue();
                return;
            }

            const button = event.target.closest("[data-lesson]");
            if (!button) return;

            const lesson = lessons.find(
                item => item.id === button.dataset.lesson
            );

            if (lesson) {
                openLesson(lesson);

                if (lessonViewer) {
                    lessonViewer.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });

        // Keep the old dashboard lesson list hidden until a course is opened.
        if (lessonGrid) {
            lessonGrid.hidden = true;
        }

        const oldLessonHeading = dashboard.querySelector("h2");
        if (oldLessonHeading && oldLessonHeading !==
            courseCurriculum.querySelector("#curriculum-title")) {
            oldLessonHeading.textContent = "Your Courses";
        }

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

        const extraQuestions = {
            python: [
                {
                    question: "Which symbol starts a comment in Python?",
                    options: ["//", "#", "<!--"],
                    answer: 1,
                    success: "Correct! Python comments begin with #."
                },
                {
                    question: "Which function displays text in Python?",
                    options: ["show()", "echo()", "print()"],
                    answer: 2,
                    success: "Correct! print() displays output."
                }
            ],
            web: [
                {
                    question: "Which HTML element creates a link?",
                    options: ["<a>", "<linktext>", "<href>"],
                    answer: 0,
                    success: "Correct! The a element creates a link."
                },
                {
                    question: "Which language styles a web page?",
                    options: ["CSS", "Python", "SQL"],
                    answer: 0,
                    success: "Correct! CSS controls a web page's appearance."
                }
            ],
            software: [
                {
                    question: "What is a variable commonly used for?",
                    options: [
                        "Storing data",
                        "Cleaning a screen",
                        "Connecting a keyboard"
                    ],
                    answer: 0,
                    success: "Correct! Variables store values."
                },
                {
                    question: "What should developers do after writing code?",
                    options: [
                        "Never check it",
                        "Test it",
                        "Always delete it"
                    ],
                    answer: 1,
                    success: "Correct! Testing helps developers find problems."
                }
            ]
        };

        const questions = [
            {
                question: lesson.question,
                options: lesson.options,
                answer: lesson.answer,
                success: lesson.success
            },
            ...(extraQuestions[lesson.id] || [])
        ];

        let questionIndex = 0;
        let score = 0;
        let answered = false;
        let timer = null;

        viewer.hidden = false;

        const courseCurriculum =
            document.getElementById("course-curriculum");

        const activeCourseId =
            courseCurriculum?.dataset.activeCourseId || null;

        try {
            localStorage.setItem(
                "codecraftLastOpenLesson",
                JSON.stringify({
                    courseId: activeCourseId,
                    lessonId: lesson.id,
                    savedAt: new Date().toISOString()
                })
            );
        } catch (error) {
            console.warn("Could not save the last-opened lesson.", error);
        }

        function getCourseLessonButtons() {
            if (
                !courseCurriculum ||
                !activeCourseId ||
                courseCurriculum.dataset.activeCourseId !== activeCourseId
            ) {
                return [];
            }

            return Array.from(
                courseCurriculum.querySelectorAll(
                    ".curriculum-open-lesson[data-lesson]:not(:disabled)"
                )
            );
        }

        function showCourseCompletion() {
            const buttons = getCourseLessonButtons();
            const progress = readProgress();
            const completed = buttons.filter(button =>
                progress[button.dataset.lesson]?.completed
            ).length;

            const course = curriculumData?.courses?.find(
                item => item.id === activeCourseId
            );

            const totalPlanned = course
                ? course.modules.reduce(
                    (sum, module) => sum + module.lessons.length, 0
                )
                : buttons.length;

            const allAvailableComplete =
                buttons.length > 0 && completed === buttons.length;

            viewer.innerHTML = `
                <h2>${allAvailableComplete
                    ? "🎉 Available Lessons Completed!"
                    : "Course Progress"}</h2>
                <section class="lesson-quiz">
                    <p role="status" aria-live="polite">
                        You completed ${completed} of ${buttons.length}
                        currently available lessons in this course.
                    </p>
                    <p>
                        This curriculum contains ${totalPlanned} planned lessons.
                        Lessons without published teaching content are not
                        counted as completed.
                    </p>
                    <button class="button" type="button" id="return-to-course">
                        Return to Course
                    </button>
                </section>
            `;

            viewer.querySelector("#return-to-course")
                .addEventListener("click", closeLesson);
        }

        function renderLessonNavigation() {
            const existing = viewer.querySelector(".lesson-navigation");
            if (existing) existing.remove();

            const buttons = getCourseLessonButtons();
            const currentIndex = buttons.findIndex(
                button => button.dataset.lesson === lesson.id
            );

            if (currentIndex < 0) return;

            const navigation = document.createElement("nav");
            navigation.className = "lesson-navigation";
            navigation.setAttribute("aria-label", "Lesson navigation");

            const previous = document.createElement("button");
            previous.type = "button";
            previous.className = "button lesson-previous";
            previous.textContent = "← Previous Lesson";
            previous.disabled = currentIndex === 0;

            const next = document.createElement("button");
            next.type = "button";
            next.className = "button lesson-next";
            next.textContent = currentIndex === buttons.length - 1
                ? "Course Progress →"
                : "Next Lesson →";

            previous.addEventListener("click", () => {
                const target = buttons[currentIndex - 1];
                if (!target) return;

                const nextLesson = lessons.find(
                    item => item.id === target.dataset.lesson
                );

                if (nextLesson) openLesson(nextLesson);
            });

            next.addEventListener("click", () => {
                const target = buttons[currentIndex + 1];

                if (!target) {
                    showCourseCompletion();
                    return;
                }

                const nextLesson = lessons.find(
                    item => item.id === target.dataset.lesson
                );

                if (nextLesson) openLesson(nextLesson);
            });

            navigation.append(previous, next);
            const closeButton = viewer.querySelector(".lesson-close");

            if (closeButton) {
                closeButton.before(navigation);
            } else {
                viewer.appendChild(navigation);
            }
        }

        function renderQuestion() {
            answered = false;
            const current = questions[questionIndex];

            viewer.innerHTML = `
                <h2>${lesson.icon} ${escapeHTML(lesson.title)}</h2>
                <div class="lesson-content">${lesson.explanation}</div>
                <div class="lesson-quiz">
                    <h3>Quick Quiz</h3>
                    <p>Question ${questionIndex + 1} of ${questions.length}</p>
                    <div class="progress-track">
                        <div class="progress-bar"
                             style="width: ${(questionIndex + 1) / questions.length * 100}%"></div>
                    </div>
                    <p class="quiz-question">${escapeHTML(current.question)}</p>
                    <form id="quiz-form">
                        ${current.options.map((option, index) => `
                            <label class="quiz-option">
                                <input type="radio" name="answer"
                                       value="${index}" required>
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
                if (answered) return;
                answered = true;

                const form = event.currentTarget;
                const chosen = Number(new FormData(form).get("answer"));
                const feedback = viewer.querySelector("#quiz-feedback");
                const isCorrect = chosen === current.answer;

                if (isCorrect) {
                    score++;
                    feedback.textContent = "✅ " + current.success;
                    feedback.className = "quiz-correct";
                } else {
                    feedback.innerHTML =
                        "<strong>❌ Not quite! That's incorrect.</strong><br>" +
                        "<strong>✅ Correct answer:</strong> " +
                        escapeHTML(current.options[current.answer]) +
                        "<br><strong>💡 Learn:</strong> " +
                        escapeHTML(current.success);
                    feedback.className = "quiz-incorrect";
                }

                form.querySelectorAll("input, button").forEach(control => {
                    control.disabled = true;
                });

                if (questionIndex < questions.length - 1) {
                    feedback.textContent += " Next question coming up...";
                    timer = setTimeout(() => {
                        questionIndex++;
                        renderQuestion();
                    }, 1500);
                } else {
                    timer = setTimeout(finishQuiz, 1500);
                }
            });

            viewer.querySelector(".lesson-close").addEventListener("click", closeLesson);
            renderLessonNavigation();
        }

        function finishQuiz() {
            const percentage = Math.round(score / questions.length * 100);
            const passed = percentage >= 70;
            const progress = readProgress();

            viewer.innerHTML = `
                <h2>${passed ? "🎉 Lesson Passed!" : "📚 Keep Practising!"}</h2>
                <div class="lesson-quiz">
                    <h3>${escapeHTML(lesson.title)}</h3>
                    <p class="${passed ? "quiz-correct" : "quiz-incorrect"}"
                       role="status" aria-live="polite">
                        Your score: ${score} out of ${questions.length} (${percentage}%)
                    </p>
                    <p>${passed
                        ? "🏆 Excellent work! You achieved the required passing score."
                        : "You need at least 70% to pass. Review the lesson and try again."}</p>
                    ${passed
                        ? "<p>✅ Your lesson completion will be saved.</p>"
                        : "<p>💡 Read the explanations carefully before your next attempt.</p>"}
                    <button class="button" id="retry-quiz" type="button">
                        ${passed ? "Practise Again" : "Retry Quiz"}
                    </button>
                </div>
                <button class="button lesson-close" type="button">Close Lesson</button>
            `;

            if (passed) {
                progress[lesson.id] = {
                    completed: true,
                    completedAt: new Date().toISOString(),
                    score: score,
                    totalQuestions: questions.length,
                    percentage: percentage
                };

                if (!saveProgress(progress)) {
                    const warning = document.createElement("p");
                    warning.textContent =
                        "Progress could not be saved on this device. Please check browser storage.";
                    viewer.querySelector(".lesson-quiz").appendChild(warning);
                }
            }

            updateProgress();
            renderAchievements();

            viewer.querySelector("#retry-quiz").addEventListener("click", () => {
                clearTimeout(timer);
                questionIndex = 0;
                score = 0;
                renderQuestion();
            });

            viewer.querySelector(".lesson-close").addEventListener("click", closeLesson);
            renderLessonNavigation();
        }

        function closeLesson() {
            clearTimeout(timer);
            viewer.hidden = true;

            // Return learners to the course they were studying.
            const courseCurriculum =
                document.getElementById("course-curriculum");

            if (
                courseCurriculum &&
                courseCurriculum.dataset.activeCourseId &&
                !courseCurriculum.hidden
            ) {
                courseCurriculum.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                return;
            }

            // Fallback for lessons opened outside a course curriculum.
            const lessonGrid = document.getElementById("lesson-grid");

            if (lessonGrid && !lessonGrid.hidden) {
                lessonGrid.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        renderQuestion();
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
                        <p>Complete every lesson in the current curriculum.</p>
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

        // Count completed lessons from the current curriculum.
        const completedCount = lessons.filter(
            lesson => progress[lesson.id]?.completed === true
        ).length;

        const totalLessons = lessons.length;

        const unlocked = {
            first: completedCount >= 1,
            rising: completedCount >= 2,
            champion: totalLessons > 0 && completedCount >= totalLessons
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
            `${completedCount} of ${totalLessons} lessons completed.`;
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


/* CodeCraft Academy mobile navigation behavior */
{
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("primary-navigation");

    if (menuButton && navigation && !menuButton.dataset.initialized) {
        menuButton.dataset.initialized = "true";

        function closeNavigation() {
            navigation.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }

        menuButton.addEventListener("click", () => {
            const opening =
                menuButton.getAttribute("aria-expanded") !== "true";

            navigation.classList.toggle("is-open", opening);
            menuButton.setAttribute("aria-expanded", String(opening));
            menuButton.setAttribute(
                "aria-label",
                opening ? "Close navigation menu" : "Open navigation menu"
            );
        });

        navigation.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener("click", closeNavigation);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeNavigation();
            }
        });

        document.addEventListener("click", event => {
            if (
                menuButton.getAttribute("aria-expanded") === "true" &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeNavigation();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 650) closeNavigation();
        });
    }
}



/* CodeCraft Academy: country and currency preferences.
   This browser-only profile is a prototype, not authentication. */
document.addEventListener("DOMContentLoaded", function () {
    const countrySelect = document.getElementById("learner-country");
    const preview = document.getElementById("currency-preview");
    const form = document.getElementById("global-registration-form");
    const message = document.getElementById("registration-message");

    if (!countrySelect || !preview || !form || !message) return;

    const currencies = {
        UG: ["UGX", "Ugandan Shilling"],
        KE: ["KES", "Kenyan Shilling"],
        TZ: ["TZS", "Tanzanian Shilling"],
        RW: ["RWF", "Rwandan Franc"],
        NG: ["NGN", "Nigerian Naira"],
        GH: ["GHS", "Ghanaian Cedi"],
        ZA: ["ZAR", "South African Rand"],
        US: ["USD", "US Dollar"],
        GB: ["GBP", "British Pound"],
        CA: ["CAD", "Canadian Dollar"],
        AU: ["AUD", "Australian Dollar"],
        IN: ["INR", "Indian Rupee"],
        DE: ["EUR", "Euro"],
        FR: ["EUR", "Euro"],
        IE: ["EUR", "Euro"],
        IT: ["EUR", "Euro"],
        ES: ["EUR", "Euro"],
        NL: ["EUR", "Euro"],
        BE: ["EUR", "Euro"],
        AT: ["EUR", "Euro"],
        PT: ["EUR", "Euro"],
        FI: ["EUR", "Euro"],
        GR: ["EUR", "Euro"],
        CY: ["EUR", "Euro"],
        JP: ["JPY", "Japanese Yen"],
        CN: ["CNY", "Chinese Yuan"],
        SG: ["SGD", "Singapore Dollar"],
        MY: ["MYR", "Malaysian Ringgit"],
        ID: ["IDR", "Indonesian Rupiah"],
        PH: ["PHP", "Philippine Peso"],
        PK: ["PKR", "Pakistani Rupee"],
        BD: ["BDT", "Bangladeshi Taka"],
        BR: ["BRL", "Brazilian Real"],
        MX: ["MXN", "Mexican Peso"],
        AR: ["ARS", "Argentine Peso"],
        CH: ["CHF", "Swiss Franc"],
        SE: ["SEK", "Swedish Krona"],
        NO: ["NOK", "Norwegian Krone"],
        DK: ["DKK", "Danish Krone"],
        PL: ["PLN", "Polish Zloty"],
        CZ: ["CZK", "Czech Koruna"],
        AE: ["AED", "UAE Dirham"],
        SA: ["SAR", "Saudi Riyal"],
        EG: ["EGP", "Egyptian Pound"],
        ET: ["ETB", "Ethiopian Birr"],
        ZM: ["ZMW", "Zambian Kwacha"],
        MW: ["MWK", "Malawian Kwacha"],
        ZW: ["ZWG", "Zimbabwe Gold"],
        BW: ["BWP", "Botswana Pula"],
        MU: ["MUR", "Mauritian Rupee"]
    };

    function updateCurrency() {
        const country = countrySelect.value;
        const currency = currencies[country];

        if (!country) {
            preview.textContent = "Choose your country to see its currency.";
            return;
        }

        if (!currency) {
            preview.textContent =
                "Currency not configured yet. Please contact CodeCraft Academy.";
            return;
        }

        preview.textContent =
            "Your display currency: " + currency[0] +
            " — " + currency[1] + ".";
    }

    try {
        const saved = JSON.parse(
            localStorage.getItem("codecraft-academy-country-v1") || "null"
        );

        if (saved && saved.country &&
            countrySelect.querySelector('option[value="' + saved.country + '"]')) {
            countrySelect.value = saved.country;
        }
    } catch (error) {
        console.warn("Could not restore country preference.", error);
    }

    updateCurrency();
    countrySelect.addEventListener("change", updateCurrency);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("learner-name").value.trim();
        const email = document.getElementById("learner-email").value.trim();
        const country = countrySelect.value;
        const currency = currencies[country];

        if (!name || !email || !country || !currency) {
            message.textContent =
                "Please complete the form and choose a supported country.";
            return;
        }

        const profile = {
            name: name,
            email: email,
            country: country,
            currency: currency[0]
        };

        try {
            localStorage.setItem(
                "codecraft-academy-country-v1",
                JSON.stringify(profile)
            );
            message.textContent =
                "Profile saved on this device. Your selected currency is " +
                currency[0] + ". Secure account registration is not yet enabled.";
        } catch (error) {
            message.textContent =
                "Your browser could not save this profile. Check browser storage settings.";
        }
    });
});



/* CODECRAFT AUTOMATIC REGISTRATION POPUP */
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("global-registration");
    const closeButton = document.getElementById("close-registration");
    const registrationForm = document.getElementById("global-registration-form");
    const nameInput = document.getElementById("learner-name");

    if (!popup) return;

    function openRegistrationPopup() {
        popup.classList.add("is-open");
        popup.setAttribute("aria-hidden", "false");
        document.body.classList.add("registration-popup-open");

        if (nameInput) {
            setTimeout(function () {
                nameInput.focus({ preventScroll: true });
            }, 100);
        }
    }

    function closeRegistrationPopup() {
        popup.classList.remove("is-open");
        popup.setAttribute("aria-hidden", "true");
        document.body.classList.remove("registration-popup-open");
    }

    let savedProfile = null;

    try {
        savedProfile = localStorage.getItem("codecraft-academy-country-v1");
    } catch (error) {
        console.warn("Could not read the saved learner profile.");
    }

    if (!savedProfile) {
        openRegistrationPopup();
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeRegistrationPopup);
    }

    // Clicking the dark background closes the popup.
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closeRegistrationPopup();
        }
    });

    // Escape closes the popup.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && popup.classList.contains("is-open")) {
            closeRegistrationPopup();
        }
    });

    // The existing registration handler saves the profile first.
    // Then this handler closes the popup after successful saving.
    if (registrationForm) {
        registrationForm.addEventListener("submit", function () {
            setTimeout(function () {
                try {
                    if (localStorage.getItem("codecraft-academy-country-v1")) {
                        closeRegistrationPopup();
                    }
                } catch (error) {
                    console.warn("Could not verify the saved learner profile.");
                }
            }, 0);
        });
    }
});
