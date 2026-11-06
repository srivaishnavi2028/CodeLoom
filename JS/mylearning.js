console.log("mylearning.js loaded");

const token = localStorage.getItem("token");
const email = localStorage.getItem("userEmail");

console.log("Token exists:", !!token);
console.log("Email:", email);

if (!token) {
    alert("Please login first");
    window.location.href = "login.html";
}


async function loadMyCourses() {

    const courseContainer =
        document.getElementById("courseContainer");

    try {

        const response = await fetch(
            "http://localhost:8081/students/my-courses",
            {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        console.log("Courses Status:", response.status);

        const responseText = await response.text();

        console.log("Courses Response:", responseText);

        if (!response.ok) {
            throw new Error(
                "Courses API failed: " + response.status
            );
        }

        const courses = JSON.parse(responseText);

        console.log("My Courses:", courses);

        if (!Array.isArray(courses) || courses.length === 0) {

            courseContainer.innerHTML = `
                <p>You have not enrolled in any courses yet.</p>
            `;

            return;
        }

        courseContainer.innerHTML = "";

        courses.forEach(course => {

            const card = document.createElement("div");

            card.className = "course-card";

            const courseName =
                course.title || course.name || "Course";

            const youtubeLink =
                course.youtubeLink;

            card.innerHTML = `
                <h3>${courseName}</h3>

                <p>
                    ${course.description ||
                    "No description available."}
                </p>

                <p>
                    Duration:
                    ${course.duration ||
                    "Not available"}
                </p>

                ${
                    youtubeLink
                    ? `
                        <button onclick="watchCourse('${youtubeLink}')">
                            ▶ Watch Course
                        </button>
                    `
                    : `
                        <p>
                            Course video not available yet.
                        </p>
                    `
                }
            `;

            courseContainer.appendChild(card);
        });

    } catch (error) {

        console.error("Course Error:", error);

        courseContainer.innerHTML = `
            <p>Unable to load your courses.</p>
        `;
    }
}


function watchCourse(youtubeLink) {

    if (!youtubeLink) {
        alert("Course video is not available.");
        return;
    }

    window.open(youtubeLink, "_blank");
}


async function loadQuizResults() {

    const quizResultContainer =
        document.getElementById("quizResultContainer");

    try {

        const response = await fetch(
            "http://localhost:8081/quiz-results",
            {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        console.log(
            "Quiz Results Status:",
            response.status
        );

        const responseText =
            await response.text();

        console.log(
            "Quiz Results Response:",
            responseText
        );

        if (!response.ok) {
            throw new Error(
                "Quiz Results API failed: " +
                response.status
            );
        }

        const results =
            JSON.parse(responseText);

        console.log(
            "All Quiz Results:",
            results
        );

        const myResults =
            results.filter(result =>
                result.email === email
            );

        console.log(
            "My Quiz Results:",
            myResults
        );

        if (myResults.length === 0) {

            quizResultContainer.innerHTML = `
                <p>
                    You have not completed any quizzes yet.
                </p>
            `;

            return;
        }

        quizResultContainer.innerHTML = "";

        myResults.forEach(result => {

            const resultCard =
                document.createElement("div");

            resultCard.className =
                "quiz-result-card";

            resultCard.innerHTML = `
                <div class="quiz-result-icon">
                    📝
                </div>

                <div class="quiz-result-info">

                    <h3>
                        ${result.subject || "Quiz"}
                    </h3>

                    <p>
                        Score:
                        ${result.score}
                        /
                        ${result.totalQuestions}
                    </p>

                </div>
            `;

            quizResultContainer.appendChild(
                resultCard
            );
        });

    } catch (error) {

        console.error(
            "Quiz Result Error:",
            error
        );

        quizResultContainer.innerHTML = `
            <p>
                Unable to load quiz results.
            </p>
        `;
    }
}


loadMyCourses();
loadQuizResults();