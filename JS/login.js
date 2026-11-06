
console.log('login.js loaded');

const loginForm = document.getElementById("loginfrm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        console.log("Login button clicked");

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

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

            const data = await response.text();

            console.log("Status:", response.status);
            console.log("Response:", data);

            if (response.ok) {

                localStorage.setItem("token", data);
                localStorage.setItem("userEmail", email);

                alert("Login Successful!");

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
