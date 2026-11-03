const score = localStorage.getItem("quizScore") || 0;
const total = localStorage.getItem("quizTotal") || 10;
const correct = localStorage.getItem("quizCorrect") || 0;
const wrong = localStorage.getItem("quizWrong") || 0;
const unanswered = localStorage.getItem("quizUnanswered") || 0;

const percentage = Math.round((score / total) * 100);

document.getElementById("score").textContent = score;
document.getElementById("total").textContent = total;
document.getElementById("percentage").textContent = percentage;
document.getElementById("correct").textContent = correct;
document.getElementById("wrong").textContent = wrong;
document.getElementById("unanswered").textContent = unanswered;

document.getElementById("tryAgain").addEventListener("click", () => {
    window.location.href = "quiz.html";
});

document.getElementById("dashboard").addEventListener("click", () => {
    window.location.href = "dashboard.html";
});