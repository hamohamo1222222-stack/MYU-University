document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("courseSearch");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue =
                this.value.toLowerCase().trim();

            const courses =
                document.querySelectorAll(".course-card");

            courses.forEach(function (course) {

                const name =
                    course
                        .querySelector(".course-name")
                        .textContent
                        .toLowerCase();

                if (name.includes(searchValue)) {

                    course.style.display = "";

                } else {

                    course.style.display = "none";

                }

            });

        });

    }


    /* =====================================
       HELP BUTTON
    ====================================== */

    const helpButton =
        document.querySelector(".help-button");

    if (helpButton) {

        helpButton.addEventListener("click", function () {

            alert(
                "مرحباً بك في المنصة التعليمية لجامعة مايو."
            );

        });

    }

});