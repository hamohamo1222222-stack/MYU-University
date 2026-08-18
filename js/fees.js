document.addEventListener("DOMContentLoaded", function () {

    /* ================= DATE ================= */

    const dateElement =
        document.getElementById("currentDate");

    function updateDate() {

        const today = new Date();

        const day =
            String(today.getDate()).padStart(2, "0");

        const month =
            String(today.getMonth() + 1).padStart(2, "0");

        const year =
            today.getFullYear();

        dateElement.textContent =
            `اليوم ${day}/${month}/${year}`;
    }

    updateDate();


    /* ================= LOGOUT ================= */

    const logoutButton =
        document.querySelector(".logout-btn");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            const confirmLogout =
                confirm("هل تريد تسجيل الخروج؟");

            if (confirmLogout) {

                window.location.href =
                    "../index.html";

            }

        });

    }


    /* ================= PRINT ================= */

    const printButton =
        document.getElementById("printBtn");

    if (printButton) {

        printButton.addEventListener("click", function () {

            window.print();

        });

    }

});