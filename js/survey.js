/* =========================================
   SURVEY PAGE
========================================= */


/* =========================================
   CURRENT DATE
========================================= */

function updateDate() {

    const dateElement =
        document.getElementById("currentDate");


    if (!dateElement) return;


    const today = new Date();


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


    dateElement.textContent =

        days[today.getDay()] +

        " " +

        today.getDate() +

        " " +

        months[today.getMonth()] +

        " " +

        today.getFullYear();

}


updateDate();



/* =========================================
   LOGOUT
========================================= */

const logoutButton =
    document.querySelector(".logout-btn");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            const confirmLogout =
                confirm("هل تريد تسجيل الخروج؟");


            if (confirmLogout) {

                window.location.href =
                    "../index.html";

            }

        }
    );

}



/* =========================================
   SURVEY BUTTON
========================================= */

const surveyButton =
    document.getElementById("surveyButton");


if (surveyButton) {

    surveyButton.addEventListener(
        "click",
        function () {

            alert(
                "لا يوجد استبيان متاح حاليًا."
            );

        }
    );

}