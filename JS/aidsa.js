const generateBtn = document.getElementById("generateBtn");

let solutions = {
    java: "",
    python: "",
    cpp: ""
};

function formatCode(code) {

    if (!code) {
        return "";
    }

    return String(code)
        .replace(/\\n/g, "\n")
        .replace(/\\"/g, '"')
        .replace(/\\t/g, "\t");
}


generateBtn.addEventListener("click", async function () {

    const topic =
        document.getElementById("topic").value.trim();

    const token =
        localStorage.getItem("token");

    const loading =
        document.getElementById("loading");

    const result =
        document.getElementById("result");


    if (!token) {

        alert("Please login first!");

        window.location.href = "login.html";

        return;
    }


    if (!topic) {

        alert("Please select a topic!");

        return;
    }


    loading.style.display = "block";

    result.innerHTML = "";


    try {

        const response = await fetch(
            "http://localhost:8081/ai/dsa?topic=" +
            encodeURIComponent(topic),
            {
                method: "GET",

                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );


        if (!response.ok) {

            if (response.status === 401) {

                alert(
                    "Session expired. Please login again."
                );

                localStorage.removeItem("token");

                window.location.href = "login.html";

                return;
            }

            throw new Error(
                "Server error: " + response.status
            );
        }


        const data =
            await response.json();


        console.log(
            "AI DSA Response:",
            data
        );


        const problem =
            data.problem || "No problem generated.";


        const explanation =
            data.explanation || "";


        const approach =
            data.approach || "";


        solutions.java =
            formatCode(data.javaSolution);


        solutions.python =
            formatCode(data.pythonSolution);


        solutions.cpp =
            formatCode(data.cppSolution);


        let examplesHTML = "";


        if (data.examples && data.examples.length > 0) {

            examplesHTML = `

                <h2>Examples</h2>

                <div class="examples-container">

                    ${data.examples.map((example, index) => `

                        <div class="example-box">

                            <h3>
                                Example ${index + 1}
                            </h3>

                            <div class="example-item">

                                <strong>
                                    Input
                                </strong>

                                <pre>${escapeHTML(
                                    example.input
                                )}</pre>

                            </div>


                            <div class="example-item">

                                <strong>
                                    Output
                                </strong>

                                <pre>${escapeHTML(
                                    example.output
                                )}</pre>

                            </div>


                            <div class="example-item">

                                <strong>
                                    Explanation
                                </strong>

                                <p>
                                    ${escapeHTML(
                                        example.explanation
                                    )}
                                </p>

                            </div>

                        </div>

                    `).join("")}

                </div>

            `;
        }


        result.innerHTML = `

            <div class="dsa-result">


                <h2>Problem</h2>

                <div class="problem-box">

                    ${escapeHTML(problem)
                        .replace(/\n/g, "<br>")}

                </div>


                ${examplesHTML}


                <h2>Explanation</h2>

                <div class="explanation-box">

                    ${escapeHTML(explanation)
                        .replace(/\n/g, "<br>")}

                </div>


                <h2>Approach</h2>

                <div class="approach-box">

                    ${escapeHTML(approach)
                        .replace(/\n/g, "<br>")}

                </div>


                <h2>Solution</h2>


                <div class="language-buttons">

                    <button
                        class="language-btn active"
                        onclick="showSolution('java', this)">
                        Java
                    </button>

                    <button
                        class="language-btn"
                        onclick="showSolution('python', this)">
                        Python
                    </button>

                    <button
                        class="language-btn"
                        onclick="showSolution('cpp', this)">
                        C++
                    </button>

                </div>


                <div class="solution-container">

                    <pre id="solutionCode"></pre>

                </div>


            </div>

        `;


        showSolution("java");


    } catch (error) {

        console.error(
            "AI DSA Error:",
            error
        );


        result.innerHTML = `

            <div class="error-box">

                <h3>
                    ❌ Failed to generate DSA problem
                </h3>

                <p>
                    Please check that:
                </p>

                <ul>

                    <li>
                        Spring Boot is running on port 8081
                    </li>

                    <li>
                        Ollama is running
                    </li>

                    <li>
                        llama3.2 model is available
                    </li>

                </ul>

                <p>
                    Error:
                    ${escapeHTML(error.message)}
                </p>

            </div>

        `;

    } finally {

        loading.style.display = "none";

    }

});


function showSolution(language, button) {

    const solutionCode =
        document.getElementById("solutionCode");


    if (!solutionCode) {
        return;
    }


    solutionCode.textContent =
        solutions[language] ||
        "Solution not available.";


    const buttons =
        document.querySelectorAll(".language-btn");


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    } else {

        const firstButton =
            document.querySelector(".language-btn");

        if (firstButton) {

            firstButton.classList.add("active");

        }

    }

}


function escapeHTML(text) {

    return String(text)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}