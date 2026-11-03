const API_BASE_URL = "http://localhost:8052";

const token = localStorage.getItem("token");

if (!token) {

    alert("Please login first!");

    window.location.href = "login.html";

}

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {

    document.getElementById("userEmail").textContent =
        userEmail;

}


async function loadDashboard() {

    try {

        const courseResponse = await fetch(
            `${API_BASE_URL}/courses`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        if (courseResponse.ok) {

            const courses = await courseResponse.json();

            document.getElementById("totalCourses").textContent =
                courses.length;

            displayCourses(courses);

        } else {

            console.error("Failed to load courses");

        }


        const myCoursesResponse = await fetch(
            `${API_BASE_URL}/students/my-courses`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        if (myCoursesResponse.ok) {

            const myCourses =
                await myCoursesResponse.json();

            document.getElementById("myCourses").textContent =
                myCourses.length;

        } else {

            console.error("Failed to load my courses");

        }


        const studentResponse = await fetch(
            `${API_BASE_URL}/students`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        if (studentResponse.ok) {

            const students =
                await studentResponse.json();

            document.getElementById("totalStudents").textContent =
                students.length;

        } else {

            console.error("Failed to load students");

        }


        await loadQuizResults();


    } catch (error) {

        console.error(
            "Dashboard Error:",
            error
        );

    }

}


async function loadQuizResults() {

    const quizResultContainer =
        document.getElementById("quizResultContainer");


    try {

        const response = await fetch(
            `${API_BASE_URL}/quiz-results`,
            {
                method: "GET",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        if (!response.ok) {

            quizResultContainer.innerHTML =
                "<p>Unable to load quiz results.</p>";

            return;

        }


        const results =
            await response.json();


        displayQuizResults(results);


    } catch (error) {

        console.error(
            "Quiz Results Error:",
            error
        );

        quizResultContainer.innerHTML =
            "<p>Unable to load quiz results.</p>";

    }

}


function displayQuizResults(results) {

    const quizResultContainer =
        document.getElementById("quizResultContainer");


    quizResultContainer.innerHTML = "";


    if (results.length === 0) {

        quizResultContainer.innerHTML =
            "<p>No quiz attempts yet.</p>";

        return;

    }


    results
        .filter(result =>
            result.subject !== null &&
            result.totalQuestions > 0
        )
        .slice(0, 5)
        .forEach(result => {

            const resultCard =
                document.createElement("div");


            resultCard.classList.add(
                "course-card"
            );


            const score =
                result.score || 0;


            const total =
                result.totalQuestions || 0;


            const percentage =
                total > 0
                    ? Math.round((score / total) * 100)
                    : 0;


            let dateText =
                "Date unavailable";


            if (result.attemptDate) {

                dateText =
                    new Date(
                        result.attemptDate
                    ).toLocaleDateString();

            }


            resultCard.innerHTML = `

                <h3>
                    ${result.subject}
                </h3>

                <p>
                    <strong>Score:</strong>
                    ${score} / ${total}
                </p>

                <p>
                    <strong>Percentage:</strong>
                    ${percentage}%
                </p>

                <p>
                    <strong>Type:</strong>
                    ${result.quizType || "NORMAL"}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${dateText}
                </p>

            `;


            quizResultContainer.appendChild(
                resultCard
            );

        });


    if (
        quizResultContainer.innerHTML === ""
    ) {

        quizResultContainer.innerHTML =
            "<p>No valid quiz attempts yet.</p>";

    }

}


function displayCourses(courses) {

    const courseContainer =
        document.getElementById("courseContainer");


    courseContainer.innerHTML = "";


    if (courses.length === 0) {

        courseContainer.innerHTML =
            "<p>No courses available.</p>";

        return;

    }


    courses
        .slice(0, 3)
        .forEach(course => {

            const courseCard =
                document.createElement("div");


            courseCard.classList.add(
                "course-card"
            );


            courseCard.innerHTML = `

                <h3>
                    ${course.title ||
                    course.name ||
                    "Course"}
                </h3>

                <p>
                    ${course.description ||
                    "No description available"}
                </p>

                <button onclick="goToCourses()">
                    View Course
                </button>

            `;


            courseContainer.appendChild(
                courseCard
            );

        });

}


function goToCourses() {

    window.location.href =
        "courses.html";

}


function logout() {

    localStorage.removeItem("token");

    localStorage.removeItem("userEmail");

    alert(
        "Logged out successfully!"
    );

    window.location.href =
        "login.html";

}


loadDashboard();