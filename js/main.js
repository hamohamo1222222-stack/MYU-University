// =========================
// LOGOUT
// =========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        sessionStorage.removeItem("loggedIn");
        sessionStorage.removeItem("username");

        window.location.href =
            window.location.pathname.includes("/pages/")
                ? "../login.html"
                : "login.html";

    });

}


// =========================
// CURRENT DATE
// =========================

const currentDate = document.getElementById("currentDate");

if (currentDate) {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    currentDate.textContent =
        today.toLocaleDateString("ar-EG", options);
}


// =========================
// COLOR SWITCHER
// =========================

const colorButton =
    document.getElementById("colorButton");

const colorOptions =
    document.getElementById("colorOptions");

const colorButtons =
    document.querySelectorAll(".color-option");


// فتح / قفل قائمة الألوان

if (colorButton && colorOptions) {

    colorButton.addEventListener("click", function () {

        colorOptions.classList.toggle("show");

    });

}


// تغيير اللون

colorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedColor =
            button.dataset.color;

        document.documentElement.style
            .setProperty("--main-color", selectedColor);

        // حفظ اللون
        localStorage.setItem(
            "myuThemeColor",
            selectedColor
        );

        colorOptions.classList.remove("show");

    });

});


// =========================
// LOAD SAVED COLOR
// =========================

const savedColor =
    localStorage.getItem("myuThemeColor");

if (savedColor) {

    document.documentElement.style
        .setProperty("--main-color", savedColor);

}