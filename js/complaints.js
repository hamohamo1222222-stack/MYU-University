document.addEventListener("DOMContentLoaded", function () {

    /* ================= DATE ================= */

    const dateElement = document.getElementById("currentDate");

    function updateDate() {

        const now = new Date();

        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        dateElement.textContent =
            `اليوم ${day}/${month}/${year}`;
    }

    updateDate();


    /* ================= ELEMENTS ================= */

    const newComplaintBtn =
        document.getElementById("newComplaintBtn");

    const complaintForm =
        document.getElementById("complaintForm");

    const cancelComplaint =
        document.getElementById("cancelComplaint");

    const saveComplaint =
        document.getElementById("saveComplaint");

    const course =
        document.getElementById("course");

    const complaintType =
        document.getElementById("complaintType");

    const complaintReason =
        document.getElementById("complaintReason");

    const complaintsTable =
        document.getElementById("complaintsTable");


    /* ================= OPEN FORM ================= */

    newComplaintBtn.addEventListener("click", function () {

        complaintForm.style.display = "block";

        complaintForm.scrollIntoView({
            behavior: "smooth"
        });

    });


    /* ================= CANCEL ================= */

    cancelComplaint.addEventListener("click", function () {

        complaintForm.style.display = "none";

        course.value = "";
        complaintType.value = "";
        complaintReason.value = "";

    });


    /* ================= SAVE COMPLAINT ================= */

    saveComplaint.addEventListener("click", function () {

        if (
            course.value === "" ||
            complaintType.value === "" ||
            complaintReason.value.trim() === ""
        ) {

            alert("من فضلك قم بإكمال جميع البيانات.");

            return;
        }


        const emptyRow =
            document.querySelector(".empty-row");

        if (emptyRow) {
            emptyRow.remove();
        }


        const row =
            document.createElement("tr");

        const currentDate =
            new Date().toLocaleDateString("ar-EG");


        row.innerHTML = `

            <td>1</td>

            <td>
                ${course.value}
            </td>

            <td>
                ${complaintType.value}
            </td>

            <td>
                ${currentDate}
            </td>

            <td>
                <span style="
                    background:#fff3cd;
                    color:#856404;
                    padding:4px 10px;
                    font-size:10px;
                ">
                    قيد المراجعة
                </span>
            </td>

        `;


        complaintsTable.appendChild(row);


        alert("تم تسجيل التظلم بنجاح.");


        complaintForm.style.display = "none";


        course.value = "";
        complaintType.value = "";
        complaintReason.value = "";

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