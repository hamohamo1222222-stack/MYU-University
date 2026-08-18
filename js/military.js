/* =========================
   CURRENT DATE
========================= */

function updateDate() {

    const dateElement = document.getElementById("currentDate");

    if (!dateElement) return;

    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    dateElement.textContent =
        `اليوم ${day}/${month}/${year}`;
}


/* تحديث التاريخ عند فتح الصفحة */
updateDate();


/* =========================
   LOGOUT
========================= */

const logoutButton = document.querySelector(".logout-btn");

if (logoutButton) {

    logoutButton.addEventListener("click", function () {

        const confirmLogout =
            confirm("هل تريد تسجيل الخروج؟");

        if (confirmLogout) {

            window.location.href =
                "../login.html";

        }

    });

}


/* =========================
   DISABLE DUMMY LINKS
========================= */

const dummyLinks =
    document.querySelectorAll('.side-menu a[href="#"]');

dummyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});