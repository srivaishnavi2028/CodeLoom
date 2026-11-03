const API_BASE_URL = "http://localhost:8052";

const token = localStorage.getItem("token");
const userEmail = localStorage.getItem("userEmail");

if (!token) {
    alert("Please login first!");
    window.location.href = "login.html";
}

if (userEmail) {
    document.getElementById("userEmail").textContent = userEmail;
}

async function loadStudentProfile() {
    try {
        const response = await fetch(
            `${API_BASE_URL}/students/profile`,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Failed to load profile");
        }

        const student = await response.json();

        console.log("Student Profile:", student);

        document.getElementById("studentId").textContent = student.id;
        document.getElementById("studentName").textContent =
            student.name || "Not available";
        document.getElementById("studentEmail").textContent =
            student.email || "Not available";

    } catch (error) {
        console.error("Profile Error:", error);

        document.getElementById("studentId").textContent = "Unable to load";
        document.getElementById("studentName").textContent = "Unable to load";
        document.getElementById("studentEmail").textContent = "Unable to load";
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    alert("Logged out successfully!");
    window.location.href = "login.html";
}

loadStudentProfile();