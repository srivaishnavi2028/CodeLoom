console.log('login.js loaded');

const loginForm = document.getElementById("loginfrm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        console.log("Login button clicked");

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        console.log("Email:", email);

        const loginData = {
            email: email,
            password: password
        };

        console.log("Sending data:", loginData);

        try {

            const response = await fetch(
                "http://localhost:8052/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                }
            );

            // Backend returns JWT token as plain text
            const data = await response.text();

            console.log("Status:", response.status);
            console.log("Response:", data);

            if (response.ok) {

                // Store JWT Token
                localStorage.setItem("token", data);

                // Store logged-in user's email
                localStorage.setItem("userEmail", email);

                console.log(
                    "JWT Token stored:",
                    localStorage.getItem("token")
                );

                console.log(
                    "User Email stored:",
                    localStorage.getItem("userEmail")
                );

                alert("Login Successful!");

                // Redirect to Dashboard
                window.location.href = "dashboard.html";

            } else {

                alert("Login Failed: " + data);

            }

        } catch (error) {

            console.error("Login Error:", error);

            alert("Server is offline or unable to connect.");

        }

    });

} else {

    console.error("Login form not found!");

}