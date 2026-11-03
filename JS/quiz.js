const questionBanks = {

    Java: [
        {
            question: "What is the size of an int in Java?",
            options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            answer: "4 bytes"
        },
        {
            question: "Which keyword is used to create an object in Java?",
            options: ["class", "new", "this", "object"],
            answer: "new"
        },
        {
            question: "Which method is the entry point of a Java program?",
            options: ["start()", "run()", "main()", "begin()"],
            answer: "main()"
        },
        {
            question: "Which of these is not a Java primitive data type?",
            options: ["int", "float", "String", "char"],
            answer: "String"
        },
        {
            question: "Which keyword is used to inherit a class in Java?",
            options: ["implements", "extends", "inherits", "super"],
            answer: "extends"
        },
        {
            question: "Which collection does not allow duplicate elements?",
            options: ["List", "Set", "ArrayList", "LinkedList"],
            answer: "Set"
        },
        {
            question: "Which keyword is used to handle exceptions?",
            options: ["try", "check", "error", "exception"],
            answer: "try"
        },
        {
            question: "Which concept allows the same method name with different parameters?",
            options: [
                "Inheritance",
                "Encapsulation",
                "Method Overloading",
                "Abstraction"
            ],
            answer: "Method Overloading"
        },
        {
            question: "Which keyword is used to define a constant in Java?",
            options: ["constant", "static", "final", "const"],
            answer: "final"
        },
        {
            question: "Which operator is used for comparison in Java?",
            options: ["=", "==", "!=", "=>"],
            answer: "=="
        }
    ],

    Python: [
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "fun", "define"],
            answer: "def"
        },
        {
            question: "Which symbol is used for comments in Python?",
            options: ["//", "#", "/*", "--"],
            answer: "#"
        },
        {
            question: "Which data type stores key-value pairs?",
            options: ["List", "Tuple", "Dictionary", "Set"],
            answer: "Dictionary"
        },
        {
            question: "Which function is used to display output?",
            options: ["display()", "echo()", "print()", "show()"],
            answer: "print()"
        },
        {
            question: "Which keyword is used to create a loop over a sequence?",
            options: ["for", "loop", "repeat", "iterate"],
            answer: "for"
        },
        {
            question: "Which of these is immutable?",
            options: ["List", "Dictionary", "Set", "Tuple"],
            answer: "Tuple"
        },
        {
            question: "Which keyword is used to create a class?",
            options: ["class", "object", "struct", "define"],
            answer: "class"
        },
        {
            question: "Which operator is used for exponentiation?",
            options: ["^", "**", "//", "%%"],
            answer: "**"
        },
        {
            question: "What is the extension of a Python file?",
            options: [".java", ".py", ".python", ".pt"],
            answer: ".py"
        },
        {
            question: "Which value represents no value in Python?",
            options: ["null", "none", "None", "void"],
            answer: "None"
        }
    ],

    C: [
        {
            question: "Who developed the C language?",
            options: [
                "James Gosling",
                "Dennis Ritchie",
                "Bjarne Stroustrup",
                "Guido van Rossum"
            ],
            answer: "Dennis Ritchie"
        },
        {
            question: "Which function is the entry point of a C program?",
            options: ["start()", "main()", "run()", "begin()"],
            answer: "main()"
        },
        {
            question: "Which symbol is used to end a statement in C?",
            options: [".", ";", ":", ","],
            answer: ";"
        },
        {
            question: "Which header file is used for printf()?",
            options: ["stdlib.h", "string.h", "stdio.h", "math.h"],
            answer: "stdio.h"
        },
        {
            question: "Which data type stores a character?",
            options: ["int", "char", "float", "double"],
            answer: "char"
        },
        {
            question: "Which operator is used to get the address of a variable?",
            options: ["*", "&", "#", "@"],
            answer: "&"
        },
        {
            question: "Which loop executes at least once?",
            options: ["for", "while", "do-while", "if"],
            answer: "do-while"
        },
        {
            question: "Which symbol is used for a single-line comment?",
            options: ["//", "#", "/*", "<!--"],
            answer: "//"
        },
        {
            question: "Which keyword is used to declare a constant variable?",
            options: ["const", "constant", "final", "static"],
            answer: "const"
        },
        {
            question: "Which operator is used for multiplication?",
            options: ["x", "*", "%", "#"],
            answer: "*"
        }
    ],

    SQL: [
        {
            question: "Which command is used to retrieve data?",
            options: ["GET", "SELECT", "FETCH", "READ"],
            answer: "SELECT"
        },
        {
            question: "Which command is used to add new records?",
            options: ["ADD", "INSERT", "CREATE", "PUT"],
            answer: "INSERT"
        },
        {
            question: "Which command is used to modify existing data?",
            options: ["CHANGE", "UPDATE", "MODIFY", "EDIT"],
            answer: "UPDATE"
        },
        {
            question: "Which command removes records from a table?",
            options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
            answer: "DELETE"
        },
        {
            question: "Which clause is used to filter rows?",
            options: ["ORDER BY", "WHERE", "GROUP BY", "FILTER"],
            answer: "WHERE"
        },
        {
            question: "Which keyword removes duplicate results?",
            options: ["UNIQUE", "DISTINCT", "ONLY", "DIFFERENT"],
            answer: "DISTINCT"
        },
        {
            question: "Which clause is used to sort results?",
            options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE"],
            answer: "ORDER BY"
        },
        {
            question: "Which command creates a table?",
            options: [
                "MAKE TABLE",
                "CREATE TABLE",
                "NEW TABLE",
                "BUILD TABLE"
            ],
            answer: "CREATE TABLE"
        },
        {
            question: "Which key uniquely identifies a row?",
            options: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Super Key"
            ],
            answer: "Primary Key"
        },
        {
            question: "Which operator is used for pattern matching?",
            options: ["LIKE", "MATCH", "PATTERN", "SEARCH"],
            answer: "LIKE"
        }
    ],

    DBMS: [
        {
            question: "What does DBMS stand for?",
            options: [
                "Database Management System",
                "Data Backup Management System",
                "Database Memory System",
                "Data Management Software"
            ],
            answer: "Database Management System"
        },
        {
            question: "Which key uniquely identifies each record?",
            options: [
                "Foreign Key",
                "Primary Key",
                "Composite Key",
                "Alternate Key"
            ],
            answer: "Primary Key"
        },
        {
            question: "Which normal form removes repeating groups?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            answer: "1NF"
        },
        {
            question: "Which key is used to establish a relationship between tables?",
            options: [
                "Primary Key",
                "Foreign Key",
                "Super Key",
                "Candidate Key"
            ],
            answer: "Foreign Key"
        },
        {
            question: "What is SQL mainly used for?",
            options: [
                "Operating systems",
                "Database management",
                "Networking",
                "Compilers"
            ],
            answer: "Database management"
        },
        {
            question: "Which command is used to remove a table?",
            options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
            answer: "DROP"
        },
        {
            question: "What is a row in a relational table called?",
            options: ["Attribute", "Tuple", "Domain", "Field"],
            answer: "Tuple"
        },
        {
            question: "What is a column in a relational table called?",
            options: ["Tuple", "Record", "Attribute", "Row"],
            answer: "Attribute"
        },
        {
            question: "Which property ensures transactions are completed fully or not at all?",
            options: ["Atomicity", "Consistency", "Isolation", "Durability"],
            answer: "Atomicity"
        },
        {
            question: "Which normal form removes partial dependency?",
            options: ["1NF", "2NF", "3NF", "4NF"],
            answer: "2NF"
        }
    ],

    "Operating Systems": [
        {
            question: "What is the main function of an operating system?",
            options: [
                "Manage computer resources",
                "Create websites",
                "Design databases",
                "Write programs"
            ],
            answer: "Manage computer resources"
        },
        {
            question: "Which of these is an operating system?",
            options: ["MySQL", "Linux", "Java", "HTML"],
            answer: "Linux"
        },
        {
            question: "What is a process?",
            options: [
                "A program in execution",
                "A file",
                "A compiler",
                "A database"
            ],
            answer: "A program in execution"
        },
        {
            question: "Which scheduling algorithm uses a time quantum?",
            options: [
                "FCFS",
                "SJF",
                "Round Robin",
                "Priority"
            ],
            answer: "Round Robin"
        },
        {
            question: "What is deadlock?",
            options: [
                "A process completing",
                "Processes waiting indefinitely",
                "A memory allocation",
                "A CPU instruction"
            ],
            answer: "Processes waiting indefinitely"
        },
        {
            question: "Which memory is closest to the CPU?",
            options: ["Hard disk", "Cache", "RAM", "DVD"],
            answer: "Cache"
        },
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Processing Utility",
                "Central Program Unit",
                "Computer Program Utility"
            ],
            answer: "Central Processing Unit"
        },
        {
            question: "Which technique allows programs larger than physical memory to run?",
            options: [
                "Virtual memory",
                "Cache memory",
                "Register memory",
                "ROM"
            ],
            answer: "Virtual memory"
        },
        {
            question: "Which scheduling algorithm executes the shortest job first?",
            options: ["FCFS", "SJF", "Round Robin", "FIFO"],
            answer: "SJF"
        },
        {
            question: "Which component manages processes and memory?",
            options: [
                "Kernel",
                "Compiler",
                "Browser",
                "Database"
            ],
            answer: "Kernel"
        }
    ],

    "Computer Networks": [
        {
            question: "What does LAN stand for?",
            options: [
                "Local Area Network",
                "Large Area Network",
                "Long Area Network",
                "Local Access Network"
            ],
            answer: "Local Area Network"
        },
        {
            question: "Which protocol is used to browse websites?",
            options: ["HTTP", "FTP", "SMTP", "SSH"],
            answer: "HTTP"
        },
        {
            question: "Which device connects different networks?",
            options: ["Switch", "Router", "Hub", "Repeater"],
            answer: "Router"
        },
        {
            question: "What does IP stand for?",
            options: [
                "Internet Protocol",
                "Internal Program",
                "Internet Process",
                "Information Protocol"
            ],
            answer: "Internet Protocol"
        },
        {
            question: "Which layer of OSI model is responsible for routing?",
            options: [
                "Transport",
                "Network",
                "Session",
                "Physical"
            ],
            answer: "Network"
        },
        {
            question: "Which protocol is used to send emails?",
            options: ["SMTP", "HTTP", "FTP", "DNS"],
            answer: "SMTP"
        },
        {
            question: "Which device forwards data using MAC addresses?",
            options: ["Router", "Switch", "Modem", "Gateway"],
            answer: "Switch"
        },
        {
            question: "What does DNS do?",
            options: [
                "Translates domain names to IP addresses",
                "Sends emails",
                "Transfers files",
                "Encrypts passwords"
            ],
            answer: "Translates domain names to IP addresses"
        },
        {
            question: "How many layers are in the OSI model?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            question: "Which protocol is used for file transfer?",
            options: ["FTP", "SMTP", "HTTP", "ARP"],
            answer: "FTP"
        }
    ],

    "Data Structures": [
        {
            question: "Which data structure follows LIFO?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            answer: "Stack"
        },
        {
            question: "Which data structure follows FIFO?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: "Queue"
        },
        {
            question: "Which data structure uses nodes and pointers?",
            options: [
                "Array",
                "Linked List",
                "String",
                "Integer"
            ],
            answer: "Linked List"
        },
        {
            question: "Which traversal visits the root first?",
            options: [
                "Inorder",
                "Postorder",
                "Preorder",
                "Level order"
            ],
            answer: "Preorder"
        },
        {
            question: "Which data structure is commonly used in BFS?",
            options: ["Stack", "Queue", "Heap", "Tree"],
            answer: "Queue"
        },
        {
            question: "Which data structure is commonly used in DFS?",
            options: ["Queue", "Stack", "Array", "HashMap"],
            answer: "Stack"
        },
        {
            question: "What is the average search complexity in a hash table?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            answer: "O(1)"
        },
        {
            question: "Which data structure is used for priority-based processing?",
            options: [
                "Stack",
                "Queue",
                "Priority Queue",
                "Linked List"
            ],
            answer: "Priority Queue"
        },
        {
            question: "Which data structure represents hierarchical data?",
            options: ["Array", "Tree", "Stack", "Queue"],
            answer: "Tree"
        },
        {
            question: "Which data structure represents relationships between vertices?",
            options: ["Stack", "Graph", "Array", "Queue"],
            answer: "Graph"
        }
    ]

};


const subject =
    new URLSearchParams(window.location.search).get("subject") || "Java";

const questions =
    questionBanks[subject] || questionBanks.Java;


let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timeLeft = 60;
let timer;
let quizSubmitted = false;


const quizTitle = document.getElementById("quizTitle");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const options = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");


quizTitle.textContent = subject + " Quiz";


function loadQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    question.textContent = current.question;

    options.innerHTML = "";

    current.options.forEach(option => {

        const optionElement = document.createElement("button");

        optionElement.type = "button";
        optionElement.classList.add("option");
        optionElement.textContent = option;

        if (userAnswers[currentQuestion] === option) {

            if (option === current.answer) {
                optionElement.classList.add("correct");
            } else {
                optionElement.classList.add("wrong");

                setTimeout(() => {
                    document.querySelectorAll(".option").forEach(item => {
                        if (item.textContent === current.answer) {
                            item.classList.add("correct-answer");
                        }
                    });
                }, 0);
            }
        }

        optionElement.addEventListener("click", function () {

            if (quizSubmitted) {
                return;
            }

            userAnswers[currentQuestion] = option;

            document.querySelectorAll(".option").forEach(item => {
                item.classList.remove(
                    "correct",
                    "wrong",
                    "correct-answer"
                );
            });

            if (option === current.answer) {

                this.classList.add("correct");

            } else {

                this.classList.add("wrong");

                document.querySelectorAll(".option").forEach(item => {

                    if (item.textContent === current.answer) {
                        item.classList.add("correct-answer");
                    }

                });

            }

        });

        options.appendChild(optionElement);

    });

    updateProgress();

    previousBtn.style.display =
        currentQuestion === 0 ? "none" : "block";

    if (currentQuestion === questions.length - 1) {

        nextBtn.style.display = "none";
        submitBtn.style.display = "block";

    } else {

        nextBtn.style.display = "block";
        submitBtn.style.display = "none";

    }
}


function updateProgress() {

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = progress + "%";

}


nextBtn.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

});


previousBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});


submitBtn.addEventListener("click", () => {

    calculateScore();

});


async function calculateScore() {

    if (quizSubmitted) {
        return;
    }

    quizSubmitted = true;

    clearInterval(timer);

    let score = 0;
    let wrong = 0;
    let unanswered = 0;


    questions.forEach((question, index) => {

        if (userAnswers[index] === null) {

            unanswered++;

        } else if (userAnswers[index] === question.answer) {

            score++;

        } else {

            wrong++;

        }

    });


    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", questions.length);
    localStorage.setItem("quizCorrect", score);
    localStorage.setItem("quizWrong", wrong);
    localStorage.setItem("quizUnanswered", unanswered);
    localStorage.setItem("quizSubject", subject);


    const token = localStorage.getItem("token");


    if (!token) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }


    const resultData = {
        subject: subject,
        score: score,
        totalQuestions: questions.length,
        quizType: "NORMAL"
    };


    console.log("Quiz Result Data:", resultData);


    try {

        const response = await fetch(
            "http://localhost:8052/quiz-results",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },

                body: JSON.stringify(resultData)
            }
        );


        if (!response.ok) {

            const errorText = await response.text();

            console.error("Server Error:", errorText);

            throw new Error("Failed to save quiz result");

        }


        const savedResult = await response.json();

        console.log("Saved Quiz Result:", savedResult);


        window.location.href = "result.html";


    } catch (error) {

        console.error("Quiz Result Error:", error);

        alert("Unable to save quiz result.");

        quizSubmitted = false;

    }

}


function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        timerDisplay.textContent = timeLeft;


        if (timeLeft <= 0) {

            clearInterval(timer);

            calculateScore();

        }

    }, 1000);

}


loadQuestion();

startTimer();