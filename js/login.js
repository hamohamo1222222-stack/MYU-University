const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("من فضلك أدخل اسم المستخدم وكلمة المرور");
        return;
    }

    if (username === "25120851" && password === "30607231601593") {

        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("username", username);

        window.location.href = "index.html";

    } else {
        alert("رقم المستخدم أو كلمة المرور غير صحيحة");
    }
});

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        sessionStorage.removeItem("loggedIn");
        sessionStorage.removeItem("username");

        window.location.href = "login.html";
    });
}