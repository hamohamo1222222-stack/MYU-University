document.addEventListener("DOMContentLoaded", function () {

    /* ================= DATE ================= */

    const dateElement =
        document.getElementById("currentDate");

    function updateDate() {

        const now = new Date();

        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        dateElement.textContent =
            `اليوم ${day}/${month}/${year}`;
    }

    updateDate();


    /* ================= CONFIRM REGISTRATION ================= */

    const submitBtn =
        document.getElementById("submitBtn");

    const agreement =
        document.getElementById("agreement");


    submitBtn.addEventListener("click", function () {

        if (!agreement.checked) {

            alert(
                "من فضلك قم بالموافقة على الإقرار أولاً."
            );

            return;
        }

        alert(
            "تم تأكيد التسجيل بنجاح."
        );

        submitBtn.innerHTML =
            '<i class="fa-solid fa-check"></i> تم التسجيل';

        submitBtn.disabled = true;

        submitBtn.style.opacity = "0.7";

    });


    /* ================= PRINT ================= */

    const printBtn =
        document.getElementById("printBtn");

    printBtn.addEventListener("click", function () {

        window.print();

    });


    /* ================= LOGOUT ================= */

    const logoutBtn =
        document.querySelector(".logout-btn");

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm("هل تريد تسجيل الخروج؟");

        if (confirmLogout) {

            window.location.href =
                "../index.html";

        }

    });

});