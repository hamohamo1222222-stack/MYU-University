/* =========================================
   REGISTRATION PAGE
========================================= */


/* =========================================
   CURRENT DATE
========================================= */

function updateDate() {

    const date = new Date();

    const days = [
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
    ];

    const months = [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر"
    ];

    const dayName = days[date.getDay()];

    const dayNumber = date.getDate();

    const monthName = months[date.getMonth()];

    const year = date.getFullYear();


    document.getElementById("currentDate").textContent =
        dayName + " " +
        dayNumber + " " +
        monthName + " " +
        year;
}


/* تشغيل التاريخ */

updateDate();


/* =========================================
   LOGOUT
========================================= */

const logoutButton =
    document.querySelector(".logout-btn");


logoutButton.addEventListener("click", function () {

    window.location.href = "../index.html";

});


/* =========================================
   PROFILE CLICK
========================================= */

const profile =
    document.querySelector(".top-profile");


profile.addEventListener("click", function () {

    window.location.href = "profile.html";

});