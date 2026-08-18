// ================= DATE =================

function updateDate() {

    const dateElement = document.getElementById("currentDate");

    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    dateElement.textContent =
        `اليوم ${day}/${month}/${year}`;
}

updateDate();


// ================= LOGOUT =================

const logoutButton = document.querySelector(".logout-btn");

logoutButton.addEventListener("click", function () {

    const confirmLogout = confirm(
        "هل تريد تسجيل الخروج؟"
    );

    if (confirmLogout) {

        window.location.href = "../index.html";

    }

});


// ================= WITHDRAWAL =================

const form = document.getElementById("withdrawalForm");

const courseSelect = document.getElementById("course");

const reason = document.getElementById("reason");

const successMessage =
    document.getElementById("successMessage");

const emptyStatus =
    document.getElementById("emptyStatus");

const requestStatus =
    document.getElementById("requestStatus");

const selectedCourse =
    document.getElementById("selectedCourse");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const courseText =
        courseSelect.options[
            courseSelect.selectedIndex
        ].text;


    selectedCourse.textContent = courseText;


    successMessage.style.display = "flex";

    emptyStatus.style.display = "none";

    requestStatus.style.display = "grid";


    form.reset();


    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});