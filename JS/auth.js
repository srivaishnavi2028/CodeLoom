/* ================= REGISTER ================= */

const registerForm = document.getElementById(
    "registerform");

if (registerForm) {

registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const userData = {
        name: name,
        email: email,
        password: password
    };
    try {
        const response = await fetch(
            "http://localhost:8081/users/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );
        const message = await response.text();
        if (response.ok) {
            alert("Registration Successful!");
            window.location.href = "login.html";
        } else {
            alert("Registration Failed: " + message);
        }
    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }
});

}

/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginData = {
        email: email,
        password: password
    };
    try {
        const response = await fetch(
            "http://localhost:8081/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }
        );
        const token = await response.text();
        if (response.ok) {
            localStorage.setItem("token", token);
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Login Failed: Invalid email or password");
        }
    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }
});

}