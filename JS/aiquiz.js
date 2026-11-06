const API_BASE_URL = "http://localhost:8081";
const generateBtn = document.getElementById("generateBtn");
const submitBtn = document.getElementById("submitBtn");
const loading = document.getElementById("loading");
const quizArea = document.getElementById("quizArea");
const questionsContainer = document.getElementById("questionsContainer");
const quizResult = document.getElementById("quizResult");
const scoreBox = document.getElementById("scoreBox");
let questions = [];
let quizSubmitted = false;
let currentSubject = "";
generateBtn.addEventListener("click", async function () {
    const subject =
        document.getElementById("subject").value;
    const numberOfQuestions =
        parseInt(
            document.getElementById("numberOfQuestions").value
        );
    const token =
        localStorage.getItem("token");
    if (!token) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }
    if (
        !subject ||
        subject.trim() === ""
    ) {
        alert("Please enter a subject.");
        return;
    }
    if (
        isNaN(numberOfQuestions) ||
        numberOfQuestions < 1 ||
        numberOfQuestions > 20
    ) {
        alert("Please enter between 1 and 20 questions.");
        return;
    }
    currentSubject = subject;
    loading.classList.remove("hidden");
    quizArea.classList.add("hidden");
    questionsContainer.innerHTML = "";
    quizResult.innerHTML = "";
    scoreBox.innerHTML = "";
    quizSubmitted = false;
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Quiz";
    try {
        const url =
            `${API_BASE_URL}/ai/generate-quiz?subject=${encodeURIComponent(subject)}&numberOfQuestions=${numberOfQuestions}`;
        const response =
            await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });
        if (!response.ok) {
            const errorText =
                await response.text();
            console.error(
                "Server error:",
                errorText
            );
            throw new Error(
                "Failed to generate quiz. Status: " +
                response.status
            );
        }
        const data =
            await response.json();
        console.log(
            "AI Quiz Data:",
            data
        );
        if (Array.isArray(data)) {
            questions = data;
        } else if (
            Array.isArray(data.questions)
        ) {
            questions = data.questions;
        } else {
            throw new Error(
                "Invalid quiz format received from server."
            );
        }
        if (questions.length === 0) {
            throw new Error(
                "No questions received."
            );
        }
        displayQuestions();
        quizArea.classList.remove("hidden");
    } catch (error) {
        console.error(
            "AI Quiz Error:",
            error
        );
        alert(error.message);
    } finally {
        loading.classList.add("hidden");
    }
});
function displayQuestions() {
    questionsContainer.innerHTML = "";
    questions.forEach((q, index) => {
        const questionDiv =
            document.createElement("div");
        questionDiv.classList.add(
            "question-card"
        );
        const questionTitle =
            document.createElement("h3");
        questionTitle.textContent =
            `${index + 1}. ${q.question}`;
        questionDiv.appendChild(
            questionTitle
        );
        const optionsDiv =
            document.createElement("div");
        optionsDiv.classList.add(
            "options"
        );
        q.options.forEach(
            (option, optionIndex) => {
                const optionLabel =
                    document.createElement("label");
                optionLabel.classList.add(
                    "option"
                );
                const radio =
                    document.createElement("input");
                radio.type = "radio";
                radio.name =
                    `question-${index}`;
                radio.value = option;
                const optionText =
                    document.createElement("span");
                optionText.textContent =
                    option;
                optionLabel.appendChild(
                    radio
                );
                optionLabel.appendChild(
                    optionText
                );
                optionsDiv.appendChild(
                    optionLabel
                );
            }
        );
        questionDiv.appendChild(
            optionsDiv
        );
        questionsContainer.appendChild(
            questionDiv
        );
    });
}
submitBtn.addEventListener(
    "click",
    async function () {
        if (quizSubmitted) {
            return;
        }
        if (questions.length === 0) {
            alert(
                "Please generate a quiz first."
            );
            return;
        }
        let score = 0;
        let unanswered = 0;
        questions.forEach(
            (q, index) => {
                const selected =
                    document.querySelector(
                        `input[name="question-${index}"]:checked`
                    );
                const optionInputs =
                    document.querySelectorAll(
                        `input[name="question-${index}"]`
                    );
                if (!selected) {
                    unanswered++;
                }
                optionInputs.forEach(
                    input => {
                        const label =
                            input.parentElement;
                        const optionValue =
                            input.value;
                        input.disabled = true;
                        label.classList.remove(
                            "correct-answer"
                        );
                        label.classList.remove(
                            "wrong-answer"
                        );
                        if (
                            optionValue ===
                            q.correctAnswer
                        ) {
                            label.classList.add(
                                "correct-answer"
                            );
                        }
                        if (
                            selected &&
                            optionValue ===
                            selected.value &&
                            selected.value !==
                            q.correctAnswer
                        ) {
                            label.classList.add(
                                "wrong-answer"
                            );
                        }
                    }
                );
                if (
                    selected &&
                    selected.value ===
                    q.correctAnswer
                ) {
                    score++;
                }
            }
        );
        const total =
            questions.length;
        const percentage =
            Math.round(
                (score / total) * 100
            );
        scoreBox.innerHTML = `
            <div class="score-card">
                <h2>AI Quiz Result</h2>
                <p>
                    Your Score:
                    <strong>
                        ${score} / ${total}
                    </strong>
                </p>
                <p>
                    Percentage:
                    <strong>
                        ${percentage}%
                    </strong>
                </p>
            </div>
        `;
        if (unanswered > 0) {
            quizResult.innerHTML = `
                <div class="answer-summary">
                    ⚠️ You left
                    ${unanswered}
                    question(s) unanswered.
                    <br>
                    The correct answers are shown
                    in <strong>green</strong>.
                </div>
            `;
        } else {
            quizResult.innerHTML = `
                <div class="answer-summary">
                    <strong>
                        Review your answers below:
                    </strong>
                    <br>
                    🟢 Green = Correct Answer
                    <br>
                    🔴 Red = Your Wrong Answer
                </div>
            `;
        }
        submitBtn.disabled = true;
        submitBtn.textContent =
            "Saving Result...";
        const token =
            localStorage.getItem("token");
        if (!token) {
            alert(
                "Please login first!"
            );
            window.location.href =
                "login.html";
            return;
        }
        const resultData = {
            subject: currentSubject,
            score: score,
            totalQuestions: total,
            quizType: "AI"
        };
        console.log(
            "AI Quiz Result Data:",
            resultData
        );
        try {
            const response =
                await fetch(
                    `${API_BASE_URL}/quiz-results`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                            "Authorization":
                                "Bearer " + token
                        },
                        body:
                            JSON.stringify(
                                resultData
                            )
                    }
                );
            if (!response.ok) {
                const errorText =
                    await response.text();
                console.error(
                    "Save Result Error:",
                    errorText
                );
                throw new Error(
                    "Failed to save AI quiz result."
                );
            }
            const savedResult =
                await response.json();
            console.log(
                "Saved AI Quiz Result:",
                savedResult
            );
            submitBtn.textContent =
                "Quiz Submitted";
            quizSubmitted = true;
            alert(
                "AI Quiz result saved successfully!"
            );
        } catch (error) {
            console.error(
                "AI Quiz Save Error:",
                error
            );
            submitBtn.disabled = false;
            submitBtn.textContent =
                "Submit Quiz";
            quizSubmitted = false;
            alert(
                "Quiz completed, but the result could not be saved."
            );
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);