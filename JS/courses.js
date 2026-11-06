const API_BASE_URL = "http://localhost:8081";

const token = localStorage.getItem("token");

if (!token) {
    alert("Please login first!");
    window.location.href = "login.html";
}

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
    document.getElementById("userEmail").textContent = userEmail;
}


async function loadCourses() {

    try {

        const response = await fetch(
            `${API_BASE_URL}/courses`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error("Failed to load courses");
        }

        const courses = await response.json();

        console.log("Courses:", courses);

        displayCourses(courses);

    } catch (error) {

        console.error("Course Error:", error);

        document.getElementById("courseContainer").innerHTML =
            "<p>Unable to load courses.</p>";
    }
}


function displayCourses(courses) {

    const container =
        document.getElementById("courseContainer");

    container.innerHTML = "";

    if (courses.length === 0) {

        container.innerHTML = "<p>No courses available.</p>";

        return;
    }

    courses.forEach(course => {

        const courseCard =
            document.createElement("div");

        courseCard.classList.add("course-card");

        const courseName =
            course.title || course.name || "Unnamed Course";

        const courseDuration =
            course.duration || "Duration not available";

        courseCard.innerHTML = `

            <h3>${courseName}</h3>

            <p>
                Duration: ${courseDuration}
            </p>

            <div class="course-buttons">

                <button onclick="watchCourse('${course.youtubeLink}')">
                    ▶️ Watch Course
                </button>

                <button onclick="enrollCourse(${course.id}, this)">
                    Enroll Now
                </button>

            </div>

        `;

        container.appendChild(courseCard);

    });
}


function watchCourse(youtubeLink) {

    if (!youtubeLink || youtubeLink === "null") {

        alert("Course video is not available.");

        return;
    }

    window.open(youtubeLink, "_blank");
}


async function enrollCourse(courseId, button) {

    try {

        button.disabled = true;
        button.textContent = "Enrolling...";

        console.log("Course ID:", courseId);
        console.log("Token:", token);

        const enrollResponse = await fetch(
            `${API_BASE_URL}/students/courses/${courseId}`,
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const result = await enrollResponse.text();

        console.log("Enrollment response:", result);

        if (enrollResponse.ok) {

            alert("Student enrolled successfully!");

            button.textContent = "Enrolled";
            button.disabled = true;

        } else {

            alert("Enrollment failed: " + result);

            button.disabled = false;
            button.textContent = "Enroll Now";
        }

    } catch (error) {

        console.error("Enrollment Error:", error);

        alert("Unable to enroll. Please try again.");

        button.disabled = false;
        button.textContent = "Enroll Now";
    }
}


function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    alert("Logged out successfully!");

    window.location.href = "login.html";
}


loadCourses();