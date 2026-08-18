/* =========================================
   MAILBOX
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
   SEARCH
========================================= */

const searchInput =
    document.getElementById("mailSearch");


const messagesBody =
    document.getElementById("messagesBody");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const value =
                searchInput.value.trim();


            /*
             * حاليا صندوق البريد فارغ،
             * لذلك البحث لا يوجد أمامه
             * رسائل ليبحث فيها.
             */

            if (value !== "") {

                messagesBody.innerHTML = `

                    <tr class="empty-row">

                        <td colspan="4">

                            لا توجد رسائل مطابقة للبحث

                        </td>

                    </tr>

                `;

            } else {

                messagesBody.innerHTML = `

                    <tr class="empty-row">

                        <td colspan="4">

                            ليست هناك بيانات متاحة في الجدول

                        </td>

                    </tr>

                `;

            }

        }
    );

}



/* =========================================
   REFRESH
========================================= */

const refreshButton =
    document.getElementById("refreshBtn");


if (refreshButton) {

    refreshButton.addEventListener(
        "click",
        function () {

            refreshButton.classList.add("rotate");


            setTimeout(
                function () {

                    refreshButton.classList.remove("rotate");

                    searchInput.value = "";

                    messagesBody.innerHTML = `

                        <tr class="empty-row">

                            <td colspan="4">

                                ليست هناك بيانات متاحة في الجدول

                            </td>

                        </tr>

                    `;

                },
                400
            );

        }
    );

}



/* =========================================
   SELECT ALL
========================================= */

const selectAll =
    document.getElementById("selectAll");


if (selectAll) {

    selectAll.addEventListener(
        "change",
        function () {

            const checkboxes =
                document.querySelectorAll(
                    "#messagesBody input[type='checkbox']"
                );


            checkboxes.forEach(
                checkbox => {

                    checkbox.checked =
                        selectAll.checked;

                }
            );

        }
    );

}



/* =========================================
   COMPOSE MODAL
========================================= */

const composeBtn =
    document.getElementById("composeBtn");


const composeModal =
    document.getElementById("composeModal");


const closeModal =
    document.getElementById("closeModal");


const cancelBtn =
    document.getElementById("cancelBtn");


function openCompose() {

    composeModal.classList.add("show");

}


function closeCompose() {

    composeModal.classList.remove("show");

}


if (composeBtn) {

    composeBtn.addEventListener(
        "click",
        openCompose
    );

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeCompose
    );

}


if (cancelBtn) {

    cancelBtn.addEventListener(
        "click",
        closeCompose
    );

}



/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

if (composeModal) {

    composeModal.addEventListener(
        "click",
        function (event) {

            if (event.target === composeModal) {

                closeCompose();

            }

        }
    );

}



/* =========================================
   SEND MESSAGE
========================================= */

const sendBtn =
    document.getElementById("sendBtn");


if (sendBtn) {

    sendBtn.addEventListener(
        "click",
        function () {

            const receiver =
                document.getElementById("receiver").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                receiver === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "من فضلك أكمل جميع بيانات الرسالة."
                );

                return;

            }


            alert(
                "تم إرسال الرسالة بنجاح."
            );


            document.getElementById("receiver").value = "";

            document.getElementById("subject").value = "";

            document.getElementById("message").value = "";


            closeCompose();

        }
    );

}



/* =========================================
   PAGINATION
========================================= */

const prevPage =
    document.getElementById("prevPage");


const nextPage =
    document.getElementById("nextPage");


if (prevPage) {

    prevPage.addEventListener(
        "click",
        function () {

            alert("لا توجد صفحات سابقة.");

        }
    );

}


if (nextPage) {

    nextPage.addEventListener(
        "click",
        function () {

            alert("لا توجد صفحات تالية.");

        }
    );

}