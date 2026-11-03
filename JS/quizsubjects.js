const subjectCards = document.querySelectorAll(".subject-card");

subjectCards.forEach(card => {

    card.addEventListener("click", function(event) {

        event.preventDefault();

        const subject = this.getAttribute("data-subject");

        window.location.href =
            "quiz.html?subject=" + encodeURIComponent(subject);

    });

});