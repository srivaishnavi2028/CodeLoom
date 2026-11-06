const token = localStorage.getItem("token");
const userEmail = localStorage.getItem("userEmail");

document.getElementById("userEmail").textContent =
    userEmail || "User";


if (!token) {

    window.location.href = "login.html";

}


async function loadResults() {

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


        if (!response.ok) {

            throw new Error("Failed to fetch results");

        }


        const results = await response.json();

        const table = document.getElementById("resultsTable");

        table.innerHTML = "";


        if (results.length === 0) {

            table.innerHTML = `
                <tr>
                    <td colspan="6">
                        No quiz results available.
                    </td>
                </tr>
            `;

            return;
        }


        results.forEach(result => {

            const score = result.score || 0;

            const total = result.totalQuestions || 0;

            let percentage = 0;

            if (total > 0) {

                percentage =
                    Math.round((score / total) * 100);

            }


            let date = "-";

            if (result.attemptDate) {

                date = new Date(
                    result.attemptDate
                ).toLocaleDateString();

            }


            const row = document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${result.subject || "-"}
                </td>

                <td>
                    ${result.quizType || "-"}
                </td>

                <td>
                    ${score}
                </td>

                <td>
                    ${total}
                </td>

                <td>
                    ${percentage}%
                </td>

                <td>
                    ${date}
                </td>

            `;


            table.appendChild(row);

        });


    } catch (error) {

        console.error(error);

        document.getElementById("resultsTable").innerHTML = `

            <tr>
                <td colspan="6">
                    Unable to load quiz results.
                </td>
            </tr>

        `;

    }

}


/* Logout */

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    window.location.href = "login.html";

}


loadResults();