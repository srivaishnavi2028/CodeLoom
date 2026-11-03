const registerForm = document.getElementById("registerfrm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = {
            name: name,
            email: email,
            password: password
        };

        try {

            const response = await fetch(
                "http://localhost:8052/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                }
            );

            const data = await response.text();

            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "login.html";
            } else {
                alert("Registration Failed: " + data);
            }

        } catch (error) {

            console.error("Fetch Error:", error);
            alert("Unable to connect to server.");
        }

    });

}