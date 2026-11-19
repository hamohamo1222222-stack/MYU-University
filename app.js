/* =============================================
   MYU STUDENT PORTAL - CLEAN VERSION
   ============================================= */

// 1. MOCK DATABASE
// 1. MOCK DATABASE
const MYU_DATABASE = {
    students: [
        {
            id: 1,
            username: "25120851",
            password: "30607231601593",
            nameAr: "أحمد محمد ",
            nameEn: "Ahmed Mohamed",
            faculty: "Computer Engineering",
            level: 2,
            personalData: {
                name: "أحمد محمد محمد عبدالاسلام",
                code: "25120851",
                gender: "ذكر",
                birthDate: "23/07/2006",
                nationalId: "30607231601593",
                issueDate: "08/2025",
                religion: "مسلم",
                nationality: "مصري",
                cardType: "مصر",
                cardCategory: "بطاقة قومية",
                issuePlace: "مصر"
            },
            contactData: {
                governorate: "مصر",
                address: "ميت بدر حلاوة - مركز سمنود - الغربية",
                homePhone: "0402864390",
                email: "Ahmed.25120851@muc.edu.eg",
                postBox: "",
                mobile: "01024038838",
                fax: ""
            },
            guardianData: {
                name: "محمد محمد محمد عبدالسلام",
                relation: "الأب",
                occupation: "ضابط بالقوات المسلحة",
                governorate: "الغربية",
                homePhone: "0402864390",
                nationality: "مصري",
                workAddress: "",
                address: "",
                mobile: "01005648880",
                fax: ""
            },
            qualificationData: {
                name: "ثانوي عام رياضة",
                school: "ثانوية عامة",
                division: "علمي رياضة",
                seatNumber: "675327",
                sat1: "",
                year: "2024-2025",
                percentage: "322.5",
                registrationNumber: "675327",
                sat2: "",
                registrationDate: ""
            },
            militaryData: {
                status: "غير مطلوب",
                number: ""
            },
            
            // 👇 انقل مصفوفة النتائج هنا داخل كائن الطالب
            results: [
                {
                    id: "fall-2026",
                    nameAr: "الفصل الاول 2026-2027",
                    nameEn: "First Semester 2026-2027",
                    statusAr: "لم يتم إعلان النتيجة",
                    statusEn: "Results not announced",
                    announced: false,
                    courses: [],
                    summary: {
                        gpa: null,
                        earnedHours: 0,
                        totalHours: 0
                    }
                },
                {
                    id: "summer-2026",
                    nameAr: "الفصل الصيفي 2025-2026",
                    nameEn: "Summer Semester 2025-2026",
                    statusAr: "النتيجة معلنة",
                    statusEn: "Results announced",
                    announced: true,
                    courses: [
                        
                        {
                            code: "CSE203",
                            nameAr: "	Database Management Systems 2",
                            nameEn: "	Database Management Systems 2",
                            hours: 3,
                            gradeAr: "أ+",
                            gradeEn: "A+",
                            grade: "A+"
                        }
                    ],
                    summary: {
                        gpa: 2.57,
                        earnedHours: 3,
                        totalHours: 3
                    }
                },
                {
                    id: "spring-2026",
                    nameAr: "الفصل الثاني 2025-2026",
                    nameEn: "Sacend Semester 2025-2026",
                    statusAr: "النتيجة معلنة",
                    statusEn: "Results announced",
                    announced: true,
                    courses: [
                        {
                            code: "PHM121",
                            nameAr: "Physics",
                            nameEn: "Physics",
                            hours: 3,
                            gradeAr: "أ",
                            gradeEn: "A",
                            grade: "A"
                        },
                        {
                            code: "ENG117",
                            nameAr: "Engineering Drawing and Projection",
                            nameEn: " Engineering Drawing and Projection",
                            hours: 3,
                            gradeAr: "د",
                            gradeEn: "D",
                            grade: "D"
                        },
                        {
                            code: "ENG118",
                            nameAr: "Logic and Proof",
                            nameEn: "Logic and Proof",
                            hours: 3,
                            gradeAr: "ب",
                            gradeEn: "B",
                            grade: "B"
                        },
                        {
                            code: "CSE111",
                            nameAr: "Software Development 1",
                            nameEn: "Software Development 1",
                            hours: 3,
                            gradeAr: "أ",
                            gradeEn: "A",
                            grade: "A"
                        },
                        {
                            code: "CSE112",
                            nameAr: "Database Management Systems ",
                            nameEn: "Database Management Systems",
                            hours: 3,
                            gradeAr: "ب",
                            gradeEn: "B",
                            grade: "B"
                        }
                    ],
                    summary: {
                        gpa: 2.44,
                        earnedHours: 15,
                        totalHours: 15
                    }
                },
                {
                    id: "summer-2026",
                    nameAr: "الفصل الاول 2025-2026",
                    nameEn: "First Semester 2025-2026",
                    statusAr: "النتيجة معلنة",
                    statusEn: "Results announced",
                    announced: true,
                    courses: [
                        {
                            code: "CSE111",
                            nameAr: "Discrete Mathematics",
                            nameEn: "Discrete Mathematics",
                            hours: 3,
                            gradeAr: "د",
                            gradeEn: "D",
                            grade: "D"
                        },
                        {
                            code: "CSE121",
                            nameAr: "Introduction to Computer Systems",
                            nameEn: "Introduction to Computer Systems",
                            hours: 3,
                            gradeAr: "ج+",
                            gradeEn: "C+",
                            grade: "C+"
                        },
                        {
                            code: "CSE212",
                            nameAr: "Praxis Programming",
                            nameEn: "Praxis Programming",
                            hours: 3,
                            gradeAr: "د+",
                            gradeEn: "B+",
                            grade: "B+"
                        },
                        {
                            code: "PHM111",
                            nameAr: "Mathematics for Engineers and Scientists 1",
                            nameEn: "Mathematics for Engineers and Scientists 1",
                            hours: 3,
                            gradeAr: "د",
                            gradeEn: "D",
                            grade: "D"
                        },
                        {
                            code: "EEE313",
                            nameAr: "Electrical and Electronic Circuits",
                            nameEn: "Electrical and Electronic Circuits",
                            hours: 3,
                            gradeAr: "ج",
                            gradeEn: "C",
                            grade: "C"
                        },
                        {
                            code: "PHM141",
                            nameAr: "Chemistry",
                            nameEn: "Chemistry",
                            hours: 3,
                            gradeAr: "ج+",
                            gradeEn: "C+",
                            grade: "C+"
                        }
                    ],
                    summary: {
                        gpa: 1.98,
                        earnedHours: 18,
                        totalHours: 18
                    }
                }
            ], // 👈 نهاية مصفوفة النتائج الخاصة بالطالب
            registeredCourses: [
                {
                    code: "CSE211",
                    nameAr: "Software Development 2",
                    nameEn: "Software Development 2",
                    hours: 3,
                    instructorAr: "د. محمد أحمد",
                    instructorEn: "Dr. Mohamed Ahmed",
                    dayAr: "الأحد",
                    dayEn: "Sunday",
                    time: "09:00 - 11:00",
                    hall: "B-201",
                    absenceRate: 0
                },
                {
                    code: "CSE316",
                    nameAr: "Operating Systems",
                    nameEn: "Operating Systems",
                    hours: 3,
                    instructorAr: "د. سارة محمود",
                    instructorEn: "Dr. Sara Mahmoud",
                    dayAr: "الإثنين",
                    dayEn: "Monday",
                    time: "11:00 - 01:00",
                    hall: "C-104",
                    absenceRate: 0
                },
                {
                    code: "CSE148",
                    nameAr: "Introduction to Computer Network",
                    nameEn: "Introduction to Computer Network",
                    hours: 3,
                    instructorAr: "د. خالد علي",
                    instructorEn: "Dr. Khaled Ali",
                    dayAr: "الثلاثاء",
                    dayEn: "Tuesday",
                    time: "09:00 - 11:00",
                    hall: "A-205",
                    absenceRate: 0
                },
                {
                    code: "PHM131",
                    nameAr: "Mechanics A",
                    nameEn: "Mechanics A",
                    hours: 3,
                    instructorAr: "د. عمرو حسن",
                    instructorEn: "Dr. Amr Hassan",
                    dayAr: "الأربعاء",
                    dayEn: "Wednesday",
                    time: "11:00 - 01:00",
                    hall: "A-101",
                    absenceRate: 0
                },
                {
                    code: "PHM112",
                    nameAr: "Mathematics for Engineers and Scientists 2",
                    nameEn: "Mathematics for Engineers and Scientists 2",
                    hours: 3,
                    instructorAr: "د. طارق إبراهيم",
                    instructorEn: "Dr. Tarek Ibrahim",
                    dayAr: "الخميس",
                    dayEn: "Thursday",
                    time: "09:00 - 11:00",
                    hall: "B-102",
                    absenceRate: 0
                },
                {
                    code: "CSE213",
                    nameAr: "Introduction to Interaction Design",
                    nameEn: "Introduction to Interaction Design",
                    hours: 3,
                    instructorAr: "د. ندى سامي",
                    instructorEn: "Dr. Nada Sami",
                    dayAr: "الخميس",
                    dayEn: "Thursday",
                    time: "01:00 - 03:00",
                    hall: "Lab-2",
                    absenceRate: 0
                }
            ],
            feesRecords: [
                {
                    semesterAr: "2025-2026 الاول",
                    semesterEn: "2025-2026 First Semester",
                    items: [
                        { titleAr: "دفع", titleEn: "Payment", date: "20/07/2025", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 2500.00, notes: "", receipt: "6120", isPaid: true },
                        { titleAr: "دفع", titleEn: "Payment", date: "28/07/2025", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 500.00, notes: "", receipt: "6419", isPaid: true },
                        { titleAr: "دفع", titleEn: "Payment", date: "29/07/2025", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 7000.00, notes: "", receipt: "22033", isPaid: true },
                        { titleAr: "دفع", titleEn: "Payment", date: "29/07/2025", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 20000.00, notes: "", receipt: "22034", isPaid: true },
                        { titleAr: "دفع", titleEn: "Payment", date: "08/02/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 20000.00, notes: "", receipt: "23118", isPaid: true },
                        { titleAr: "رسوم ملف الالتحاق", titleEn: "Application File Fees", date: "12:1 2/6/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 2500.00, notes: "", receipt: "", isPaid: false },
                        { titleAr: "مصروفات الفصل الدراسي الثاني", titleEn: "Second Semester Tuition Fees", date: "11:59 2/6/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 23000.00, notes: "", receipt: "", isPaid: false },
                        { titleAr: "اعادة اختبار", titleEn: "Re-exam Fee", date: "12:0 2/6/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 500.00, notes: "", receipt: "", isPaid: false },
                        { titleAr: "مصروفات الفصل الدراسي الاول", titleEn: "First Semester Tuition Fees", date: "11:58 2/6/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 27000.00, notes: "", receipt: "", isPaid: false },
                        { titleAr: "خصم طباط", titleEn: "Officers Discount", date: "11:22 1/7/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 3000.00, notes: "", receipt: "", isPaid: true }
                    ]
                },
                {
                    semesterAr: "2025-2026 الصيفي",
                    semesterEn: "2025-2026 Summer Semester",
                    items: [
                        { titleAr: "رسم ساعة معتمدة ( 3.0 ساعة )", titleEn: "Credit Hour Fee (3.0 Hours)", date: "01/07/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 5550.00, notes: "", receipt: "", isPaid: false },
                        { titleAr: "دفع", titleEn: "Payment", date: "01/07/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 5550.00, notes: "", receipt: "23633", isPaid: true }
                    ]
                },
                {
                    semesterAr: "2026-2027 الاول",
                    semesterEn: "2026-2027 First Semester",
                    items: [
                        { titleAr: "Payment", titleEn: "Payment", date: "25/08/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 28000.00, notes: "", receipt: "621320304701", isPaid: true },
                        { titleAr: "مصروفات الفصل الدراسي الاول", titleEn: "First Semester Tuition Fees", date: "10:18 30/9/2026", currencyAr: "جنيه مصري", currencyEn: "EGP", amount: 28000.00, notes: "", receipt: "", isPaid: false }
                    ]
                }
            ],
            paymentPermissionData: {
                semesterAr: "إذن الدفع الأول 2026-2027",
                semesterEn: "First Semester Payment Permission 2026-2027",
                courseCodes: ["CSE211", "CSE316", "CSE148", "PHM131", "PHM112", "CSE213"],
                summaryItems: [
                    { labelAr: "مصروفات الفصل الدراسي الأول", labelEn: "First Semester Tuition Fees", amount: "28000.0" },
                    { labelAr: "رصيد سابق", labelEn: "Previous Balance", amount: "0" },
                    { labelAr: "Payment", labelEn: "Payment", amount: "28000.0-" },
                    { labelAr: "الإجمالي", labelEn: "Total", amount: "0.00", isTotal: true }
                ]
            },
                        absenceRecords: [
                {
                    code: "CSE213",
                    courseAr: "Introduction to Interaction Design",
                    courseEn: "Introduction to Interaction Design",
                    total: 1,
                    typeAr: "محاضرة",
                    typeEn: "Lecture",
                    count: 1,
                    percentage: "6.67"
                },
                {
                    code: "PHM131",
                    courseAr: "Mechanics A",
                    courseEn: "Mechanics A",
                    total: 1,
                    typeAr: "محاضرة",
                    typeEn: "Lecture",
                    count: 1,
                    percentage: "6.67"
                }
            ],
                        studyScheduleData: [
                { dayAr: "السبت", dayEn: "Saturday", slots: [] },
                { dayAr: "الأحد", dayEn: "Sunday", slots: [] },
                {
                    dayAr: "الإثنين",
                    dayEn: "Monday",
                    slots: [
                        {
                            period: "9:00-10:40",
                            course: "Software Development 2",
                            instructorAr: "د. Seham Moawed Aly Ebrahim / م. Ahmed Abdelsalam Othman Ismail",
                            instructorEn: "Dr. Seham Moawed Aly Ebrahim / Eng. Ahmed Abdelsalam Othman Ismail",
                            typeAr: "محاضرة",
                            typeEn: "Lecture",
                            groupAr: "مجموعة 1 - محاضرة",
                            groupEn: "Group 1 - Lecture",
                            location: "Lectures Hall A201"
                        },
                        {
                            period: "10:50-11:40",
                            course: "Software Development 2",
                            instructorAr: "م. Ahmed Abdelsalam Othman Ismail",
                            instructorEn: "Eng. Ahmed Abdelsalam Othman Ismail",
                            typeAr: "فصل",
                            typeEn: "Tutorial",
                            groupAr: "مجموعة 1 - عملي 1",
                            groupEn: "Group 1 - Lab 1",
                            location: "Computer Lab A407"
                        },
                        {
                            period: "11:40-12:30",
                            course: "Software Development 2",
                            instructorAr: "م. Ahmed Abdelsalam Othman Ismail",
                            instructorEn: "Eng. Ahmed Abdelsalam Othman Ismail",
                            typeAr: "عملي",
                            typeEn: "Lab",
                            groupAr: "مجموعة 1 - معمل 1",
                            groupEn: "Group 1 - Lab 1",
                            location: "Computer Lab A407"
                        }
                    ]
                },
                {
                    dayAr: "الثلاثاء",
                    dayEn: "Tuesday",
                    slots: [
                        {
                            period: "10:50-12:30",
                            course: "Mechanics A",
                            instructorAr: "د. Tahany Mohamed Fawzy Mahmoud",
                            instructorEn: "Dr. Tahany Mohamed Fawzy Mahmoud",
                            typeAr: "فصل",
                            typeEn: "Tutorial",
                            groupAr: "مجموعة 1 - عملي 3",
                            groupEn: "Group 1 - Tutorial 3",
                            location: "Class room A114"
                        },
                        {
                            period: "13:30-15:10",
                            course: "Mathematics for Engineers and Scientists 2",
                            instructorAr: "د. Mona Hussien Mohamed",
                            instructorEn: "Dr. Mona Hussien Mohamed",
                            typeAr: "فصل",
                            typeEn: "Tutorial",
                            groupAr: "مجموعة 1 - عملي 2",
                            groupEn: "Group 1 - Tutorial 2",
                            location: "Class room A111"
                        }
                    ]
                },
                {
                    dayAr: "الأربعاء",
                    dayEn: "Wednesday",
                    slots: [
                        {
                            period: "9:00-10:40",
                            course: "Introduction to Interaction Design",
                            instructorAr: "د. Amaal Samir Abd El hameed",
                            instructorEn: "Dr. Amaal Samir Abd El hameed",
                            typeAr: "محاضرة",
                            typeEn: "Lecture",
                            groupAr: "مجموعة 1 - محاضرة",
                            groupEn: "Group 1 - Lecture",
                            location: "Lecture room A108"
                        },
                        {
                            period: "10:50-12:30",
                            course: "Mathematics for Engineers and Scientists 2",
                            instructorAr: "د. Amal Sayed",
                            instructorEn: "Dr. Amal Sayed",
                            typeAr: "محاضرة",
                            typeEn: "Lecture",
                            groupAr: "مجموعة 1 - محاضرة",
                            groupEn: "Group 1 - Lecture",
                            location: "Lecture room A108"
                        },
                        {
                            period: "12:40-14:20",
                            course: "Mechanics A",
                            instructorAr: "د. Dina Abd El Hamied / م. Habiba Haitham Abdelfattah",
                            instructorEn: "Dr. Dina Abd El Hamied / Eng. Habiba Haitham Abdelfattah",
                            typeAr: "محاضرة",
                            typeEn: "Lecture",
                            groupAr: "مجموعة 1 - محاضرة",
                            groupEn: "Group 1 - Lecture",
                            location: "Lectures Hall A201"
                        },
                        {
                            period: "14:20-16:00",
                            course: "Introduction to Interaction Design",
                            instructorAr: "م. Amany Ismail Ali Ali",
                            instructorEn: "Eng. Amany Ismail Ali Ali",
                            typeAr: "فصل",
                            typeEn: "Tutorial",
                            groupAr: "مجموعة 1 - عملي 2",
                            groupEn: "Group 1 - Tutorial 2",
                            location: "Class room A108"
                        }
                    ]
                },
                { dayAr: "الخميس", dayEn: "Thursday", slots: [] },
                { dayAr: "الجمعة", dayEn: "Friday", slots: [] }
            ],
                        examScheduleData: [
                {
                    date: "10/11/2026",
                    code: "CSE211",
                    course: "Software Development 2",
                    time: "AM - 12:00 PM 11:00",
                    committee: "A201",
                    location: "Lectures Hall A201",
                    placeNumber: "A201",
                    seatNumber: "1279",
                    notes: ""
                },
                {
                    date: "11/11/2026",
                    code: "PHM112",
                    course: "Mathematics for Engineers and Scientists 2",
                    time: "PM - 01:30 PM 12:30",
                    committee: "classroom",
                    location: "Lecture room A113",
                    placeNumber: "A113",
                    seatNumber: "883",
                    notes: ""
                },
                {
                    date: "11/11/2026",
                    code: "PHM131",
                    course: "Mechanics A",
                    time: "PM - 03:00 PM 02:00",
                    committee: "80",
                    location: "Lecture room A108",
                    placeNumber: "A108",
                    seatNumber: "891",
                    notes: ""
                },
                {
                    date: "12/11/2026",
                    code: "CSE213",
                    course: "Introduction to Interaction Design",
                    time: "PM - 03:00 PM 02:00",
                    committee: "A201",
                    location: "Lectures Hall A201",
                    placeNumber: "A201",
                    seatNumber: "1292",
                    notes: ""
                }
            ]




            }
    ],
    currentStudent: null
};


// 2. TRANSLATIONS
const translations = {
    ar: {
        portalTitle: "بوابة الخدمات الطلابية",
        systemName: "نظام ابن الهيثم - جامعة مايو",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        remember: "تذكرني",
        login: "تسجيل الدخول",
        forgotPassword: "نسيت كلمة المرور",
        personalData: "البيانات الشخصية",
        academicResults: "النتائج الدراسية",
        academicRegistration: "التسجيل الأكاديمي",
        registrationPeriodEnded: "انتهت فترة التسجيل",
        militaryEducation: "التربية العسكرية",
        militaryNoData: "لا يوجد بيانات",
        studentCards: "البطاقات التعريفية",
        survey: "استبيان",
        inbox: "صندوق البريد",
        registrationForm: "استمارة التسجيل",
        complaints: "تظلمات",
        withdrawal: "الانسحاب من مقرر",
        fees: "الرسوم",
        courses: "مقرراتي",
        attendance: "الحضور والغياب",
        schedule: "الجداول",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        help: "طلب دعم",
        emptyFields: "من فضلك أدخل اسم المستخدم وكلمة المرور",
        invalidCredentials: "اسم المستخدم أو كلمة المرور غير صحيحة",
        loginSuccess: "تم تسجيل الدخول بنجاح",
        forgotMessage: "يرجى التواصل مع إدارة الجامعة لاستعادة كلمة المرور",
        settingsMessage: "الإعدادات",
        passwordMessage: "يمكنك تغيير كلمة المرور من خلال إدارة الجامعة",
        loginRequired: "يرجى تسجيل الدخول أولاً",
        personalPageTitle: "البيانات الشخصية",
        personalInfo: "البيانات الشخصية",
        contactInfo: "بيانات الاتصال",
        guardianInfo: "بيانات ولي الأمر",
        qualificationInfo: "بيانات المؤهل السابق",
        militaryInfo: "بيانات الحالة العسكرية",
        name: "الاسم",
        code: "الكود",
        gender: "الجنس",
        birthDate: "تاريخ الميلاد",
        nationalId: "رقم البطاقة",
        issueDate: "تاريخ الإصدار",
        religion: "الديانة",
        nationality: "الجنسية",
        cardType: "محل الإصدار",
        cardTypeName: "نوع البطاقة",
        issuePlace: "مكان الصدور",
        governorate: "المحافظة",
        address: "العنوان",
        phone: "التليفون",
        homePhone: "تليفون المنزل",
        mobile: "المحمول",
        email: "البريد الإلكتروني",
        fax: "فاكس",
        relation: "الصلة",
        occupation: "الوظيفة",
        workAddress: "مكان العمل",
        qualification: "المؤهل",
        school: "المدرسة",
        division: "الشعبة",
        seatNumber: "رقم الجلوس",
        sat1: "Sat I",
        sat2: "Sat II",
        qualificationYear: "سنة المؤهل",
        percentage: "النسبة",
        registrationNumber: "رقم التنسيق",
        registrationDate: "تاريخ التنسيق",
        militaryStatus: "الحالة العسكرية",
        militaryNumber: "الرقم العسكري",
        universityName: "جامعة مايو",
        studentRole: "طالب بالجامعة",
        
        resultsOverview: "عرض النتائج الدراسية",
        resultsPageTitle: "النتائج الدراسية",
        allSemesters: "جميع الفصول الدراسية",
        loadingResults: "جاري تحميل النتائج...",
        courseCode: "كود المادة",
        courseName: "اسم المادة",
        creditHours: "الساعات المعتمدة",
        gradeLabel: "التقدير",
        semesterGPA: "المعدل التراكمي",
        earnedHours: "الساعات المجتازة",
        totalHours: "إجمالي الساعات",
        resultsNotAnnounced: "لم يتم إعلان النتيجة",
        resultsAnnounced: "النتيجة معلنة",
        noResults: "لا توجد نتائج لهذا الفصل الدراسي",
        selectSemester: "اختر الفصل الدراسي",
        studentCardTitle: "بطاقة الطالب",
        studentFullName: "الاسم",
        studentUniversityNumber: "الرقم الجامعي",
        studentFaculty: "الكلية",      
        studentDepartment: "القسم",
        downloadStudentCard: "تحميل البطاقة",
        cardStudentDepartment: "كمبيوتر سيستم",
        inboxTitle: "صندوق البريد",
        composeMessage: "إنشاء رسالة",
        inboxReceived: "صندوق الوارد",
        inboxSent: "صندوق الصادر",
        newMessage: "إنشاء رسالة جديدة",
        messageSubject: "عنوان الرسالة",
        messageBody: "نص الرسالة",
        sendMessage: "إرسال الرسالة",
        registrationFormTitle: "استمارة التسجيل",
        registrationExpired: "انتهت فترة الدخول",
        survey: "استبيان",
        grievancesTitle: "طلب إعادة رصد درجات مقرر",
        chooseYear: "اختر السنة:",
        chooseSemester: "اختر الفصل الدراسي:",
        chooseCourse: "اختر المادة:",
        firstSemester: "الأول",
        secondSemester: "الثاني",
        summerSemester: "الصيفي",
        studentNotes: "ملاحظات الطالب:",
        grievanceNotesPlaceholder: "اكتب ملاحظاتك هنا",
        saveGrievance: "حفظ",
        grievanceRequests: "الطلبات",
        noGrievanceRequests: "لا توجد طلبات",
        feesPayment: "بيانات سداد الرسوم",
        paymentPermission: "إذن الدفع",
        electronicPlatform: "المنصة الإلكترونية",
        updatePlatform: "تحديث المنصة",
        absence: "الغياب",
        qrAttendance: "حضور QR code",
        studySchedule: "الجدول الدراسي",
        examSchedule: "جدول الامتحانات",
        showRegisteredCourses: "عرض المقررات المسجلة المتاحة للانسحاب",
        actionLabel: "الإجراء",
        withdrawBtn: "انسحاب من المقرر",
        withdrawnDone: "تم تقديم الطلب",
        withdrawalRequestsTitle: "طلبات الانسحاب المقدمة",
        requestStatus: "حالة الطلب",
        cancelRequest: "إلغاء الطلب",
        underReviewStatus: "قيد المراجعة",
        withdrawSuccessMsg: "تم تقديم طلب الانسحاب من المقرر بنجاح.",
        withdrawCancelMsg: "تم إلغاء طلب الانسحاب.",
        confirmWithdrawPrompt: "هل أنت متأكد من رغبتك في الانسحاب من مقرر:",
        printLabel: "طباعة",
        feesStatementTitle: "صحيفة الرسوم",
        nameLabel: "الاسم:",
        facultyLabel: "الكلية:",
        codeLabel: "الكود:",
        academicYearLabel: "العام الجامعي:",
        feeItemCol: "الرسوم",
        feeDateCol: "التاريخ",
        feeCurrencyCol: "العملة",
        feeAmountCol: "القيمة",
        feeNotesCol: "ملاحظات",
        feeReceiptCol: "رقم الإيصال",
        totalBalanceLabel: "الإجمالي",
        paymentPermHeading: "إذن الدفع الأول 2026-2027",
        nationalIdLabel: "رقم البطاقة:",
        codeCol: "الكود",
        courseCol: "المقرر",
        hoursCol: "الساعات المعتمدة",
        educationalPlatformBtn: "المنصة التعليمية",
        updatePlatformNotice: "هذا التطبيق خاص بتحديث المقررات الدراسية المسجلة بجدولك الدراسي خلال الفصل فقط وليس بمحتواها العلمي المعروض على المنصة الخاصة بك",
        updateElectronicPlatformBtn: "تحديث المنصة الإلكترونية",
        syncingPlatformText: "جاري تحديث المقررات على المنصة...",
        syncSuccessText: "تم تحديث جميع المقررات المسجلة (6 مقررات) على المنصة الإلكترونية بنجاح.",
        absenceTotalCol: "المجموع",
        absenceTypeCol: "محاضرة/معمل",
        absenceCountCol: "المرات",
        absencePercentCol: "النسبة",
        noAbsenceRecords: "لا توجد سجلات غياب مسجلة",
                scheduleView1: "الشكل الأول",
        scheduleView2: "الشكل الثاني",
        advisorLabel: "المرشد الأكاديمي:",
        programLabel: "البرنامج:",
        levelLabel: "المستوى:",
        dayCol: "اليوم",
        periodCol: "الفترات",
        instructorCol: "القائم بالتدريس",
        sessionTypeCol: "النوع",
        groupNumCol: "رقم المجموعة",
        locationCol: "المكان",
        studentSignature: "توقيع الطالب",
        advisorSignature: "توقيع المرشد الأكاديمي",
        headDeptSignature: "توقيع رئيس القسم",
                examScheduleTitle: "جدول الإمتحانات",
        yearTermLabel: "السنة:",
        examTimeCol: "الوقت",
        committeeCol: "اللجنة",
        committeePlaceCol: "مكان اللجنة",
        placeNumCol: "رقم المكان",
        seatNumCol: "رقم المقعد"



},
en: {
        portalTitle: "Student Services Portal",
        systemName: "EBN Al-Haytham System - MYU University",
        username: "Username",
        password: "Password",
        remember: "Remember me",
        login: "Login",
        forgotPassword: "Forgot Password?",
        personalData: "Personal Data",
        academicResults: "Academic Results",
        academicRegistration: "Academic Registration",
        registrationPeriodEnded: "Registration period has ended",
        militaryEducation: "Military Education",
        militaryNoData: "No data available",
        studentCards: "Student ID Cards",
        survey: "Survey",
        inbox: "Inbox",
        registrationForm: "Registration Form",
        complaints: "Complaints",
        withdrawal: "Course Withdrawal",
        fees: "Fees",
        courses: "My Courses",
        attendance: "Attendance",
        schedule: "Timetable",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        help: "Support",
        emptyFields: "Please enter username and password",
        invalidCredentials: "Invalid username or password",
        loginSuccess: "Login successful",
        forgotMessage: "Please contact the university administration to reset your password",
        settingsMessage: "Settings",
        passwordMessage: "Please contact the university administration to change your password",
        loginRequired: "Please login first",
        personalPageTitle: "Personal Data",
        personalInfo: "Personal Information",
        contactInfo: "Contact Information",
        guardianInfo: "Guardian Information",
        qualificationInfo: "Previous Qualification",
        militaryInfo: "Military Status",
        name: "Name",
        code: "Student Code",
        gender: "Gender",
        birthDate: "Date of Birth",
        nationalId: "National ID",
        issueDate: "Issue Date",
        religion: "Religion",
        nationality: "Nationality",
        cardType: "Issuing Location",
        cardTypeName: "Card Type",
        issuePlace: "Place of Issue",
        governorate: "Governorate",
        address: "Address",
        phone: "Phone",
        homePhone: "Home Phone",
        mobile: "Mobile",
        email: "Email",
        fax: "Fax",

        relation: "Relationship",
        occupation: "Occupation",
        workAddress: "Work Address",
        qualification: "Qualification",
        school: "School",
        division: "Division",
        seatNumber: "Seat Number",
        sat1: "SAT I",
        sat2: "SAT II",
        qualificationYear: "Qualification Year",
        percentage: "Grade",
        registrationNumber: "Registration Number",
        registrationDate: "Registration Date",
        militaryStatus: "Military Status",
        militaryNumber: "Military Number",
        universityName: "May University",
        studentRole: "University Student",
        
        resultsPageTitle: "Academic Results",
        resultsOverview: "Academic Results Overview",
        selectSemester: "Select Semester",
        allSemesters: "All Semesters",
        loadingResults: "Loading results...",
        courseCode: "Course Code",
        courseName: "Course Name",
        creditHours: "Credit Hours",
        gradeLabel: "Grade",
        semesterGPA: "GPA",
        earnedHours: "Earned Hours",
        totalHours: "Total Hours",
        resultsNotAnnounced: "Results Not Announced",
        resultsAnnounced: "Results Announced",
        noResults: "No results available for this semester",
        studentCardTitle: "Student Card",
        studentFullName: "Name",
        studentUniversityNumber: "University ID",
        studentFaculty: "Faculty",
        studentDepartment: "Department",
        downloadStudentCard: "Download Card",
        cardStudentDepartment: "Computer System",
        inboxTitle: "Inbox",
        inboxReceived: "Inbox",
        inboxSent: "Sent Items",
        newMessage: "New Message",
        messageSubject: "Subject",
        messageBody: "Message",
        composeMessage: "Compose Message",
        inboxTitle: "Inbox",
        composeMessage: "Compose Message",
        inboxReceived: "Inbox",
        inboxSent: "Sent Items",
        newMessage: "New Message",
        messageSubject: "Subject",
        messageBody: "Message",
        sendMessage: "Send Message",
        registrationFormTitle: "Registration Form",
        registrationExpired: "The registration period has ended",
        survey: "Survey",
        grievancesTitle: "Course Grade Recheck Request",
        chooseYear: "Choose Year:",
        chooseSemester: "Choose Semester:",
        chooseCourse: "Choose Course:",
        firstSemester: "First",
        secondSemester: "Second",
        summerSemester: "Summer",
        studentNotes: "Student Notes:",
        grievanceNotesPlaceholder: "Write your notes here",
        saveGrievance: "Save",
        grievanceRequests: "Requests",
        noGrievanceRequests: "No requests found",
        feesPayment: "Fees Payment Details",
        paymentPermission: "Payment Permission",
        electronicPlatform: "E-Learning Platform",
        updatePlatform: "Platform Update",
        absence: "Absence",
        qrAttendance: "QR Code Attendance",
        studySchedule: "Study Schedule",
        examSchedule: "Exam Schedule",
                showRegisteredCourses: "Show Registered Courses Available for Withdrawal",
        actionLabel: "Action",
        withdrawBtn: "Withdraw Course",
        withdrawnDone: "Requested",
        withdrawalRequestsTitle: "Submitted Withdrawal Requests",
        requestStatus: "Status",
        cancelRequest: "Cancel",
        underReviewStatus: "Under Review",
        withdrawSuccessMsg: "Course withdrawal request submitted successfully.",
        withdrawCancelMsg: "Withdrawal request cancelled.",
        confirmWithdrawPrompt: "Are you sure you want to withdraw from:",
                printLabel: "Print",
        feesStatementTitle: "Fees Statement",
        nameLabel: "Name:",
        facultyLabel: "Faculty:",
        codeLabel: "Code:",
        academicYearLabel: "Academic Year:",
        feeItemCol: "Fees",
        feeDateCol: "Date",
        feeCurrencyCol: "Currency",
        feeAmountCol: "Amount",
        feeNotesCol: "Notes",
        feeReceiptCol: "Receipt No.",
        totalBalanceLabel: "Total",
                paymentPermHeading: "First Semester Payment Permission 2026-2027",
        nationalIdLabel: "National ID:",
        codeCol: "Code",
        courseCol: "Course",
        hoursCol: "Credit Hours",
        educationalPlatformBtn: "Educational Platform (LMS)",
        updatePlatformNotice: "This application is only for updating the courses registered in your schedule during the semester and not their scientific content displayed on your platform.",
        updateElectronicPlatformBtn: "Update Electronic Platform",
        syncingPlatformText: "Updating courses on platform...",
        syncSuccessText: "All registered courses (6 courses) have been successfully synchronized with the LMS.",
        absenceTotalCol: "Total",
        absenceTypeCol: "Lecture/Lab",
        absenceCountCol: "Times",
        absencePercentCol: "Percentage",
        noAbsenceRecords: "No absence records found",
                scheduleView1: "View 1",
        scheduleView2: "View 2",
        advisorLabel: "Academic Advisor:",
        programLabel: "Program:",
        levelLabel: "Level:",
        dayCol: "Day",
        periodCol: "Periods",
        instructorCol: "Instructor",
        sessionTypeCol: "Type",
        groupNumCol: "Group No.",
        locationCol: "Location",
        studentSignature: "Student Signature",
        advisorSignature: "Academic Advisor Signature",
        headDeptSignature: "Department Head Signature",
                examScheduleTitle: "Exam Schedule",
        yearTermLabel: "Year:",
        examTimeCol: "Time",
        committeeCol: "Committee",
        committeePlaceCol: "Committee Location",
        placeNumCol: "Room No.",
        seatNumCol: "Seat No."


}
};

// 3. LANGUAGE MANAGEMENT
let currentLanguage = localStorage.getItem("myu_language") || "ar";

function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("myu_language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (!translations[language][key]) return;
        const icon = element.querySelector("i");
        if (icon) {
            Array.from(element.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) node.remove();
            });
            element.appendChild(document.createTextNode(translations[language][key]));
        } else {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach(element => {
        const key = element.dataset.placeholder;
        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });

    const languageButton = document.getElementById("languageToggle");
    if (languageButton) {
        languageButton.textContent = language === "ar" ? "En" : "عربي";
    }

    updateDate();
    showMessage("");
    if (typeof renderPersonalData === "function" && window.location.pathname.endsWith("personal-data.html")) {
        renderPersonalData();
    }
    if (
    typeof renderResults === "function" &&
    document.body.classList.contains("results-page")
    ) {
    renderResults();
    }
    if (document.body.classList.contains("student-cards-page")) {
    renderStudentCard();
    }
    if (document.body.classList.contains("withdrawal-page") && typeof renderWithdrawalPage === "function") {
    renderWithdrawalPage();
    }
    if (document.getElementById("feesTableBody") && typeof renderFeesStatement === "function") {
    renderFeesStatement();
    }
    if (document.getElementById("permCoursesBody") && typeof renderPaymentPermission === "function") {
    renderPaymentPermission();
    }
    if (document.getElementById("absenceTableBody") && typeof renderAbsenceTable === "function") {
    renderAbsenceTable();
    }
    if (document.getElementById("studyScheduleBody") && typeof renderStudySchedule === "function") {
    renderStudySchedule();
    }
    if (document.getElementById("examScheduleBody") && typeof renderExamSchedule === "function") {
    renderExamSchedule();
    }




}
// 4. DATE MANAGEMENT
function updateDate() {
    const dateElement = document.getElementById("currentDate");
    if (!dateElement) return;

    const now = new Date();
    const locale = currentLanguage === "ar" ? "ar-EG" : "en-US";

    dateElement.textContent = now.toLocaleDateString(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// 5. LOGIN SYSTEM
function showMessage(message, type = "error") {
    const messageElement = document.getElementById("loginMessage");
    if (!messageElement) return;
    messageElement.textContent = message;
    messageElement.className = `login-message ${type}`;
}

function getCurrentStudent() {
    const session = sessionStorage.getItem("myu_current_student");
    if (!session) return null;
    try {
        return JSON.parse(session);
    } catch (error) {
        console.error("Invalid session data:", error);
        return null;
    }
}

function login(username, password) {
    if (!username || !password) {
        showMessage(translations[currentLanguage].emptyFields);
        return false;
    }

    const student = MYU_DATABASE.students.find(item => {
        return item.username === username && item.password === password;
    });

    if (!student) {
        showMessage(translations[currentLanguage].invalidCredentials);
        return false;
    }

    const sessionData = {
        username: student.username,
        nameAr: student.nameAr,
        nameEn: student.nameEn
    };

    sessionStorage.setItem("myu_current_student", JSON.stringify(sessionData));
    MYU_DATABASE.currentStudent = student;

    showMessage(translations[currentLanguage].loginSuccess, "success");

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 700);

    return true;
}

// 6. LOGOUT SYSTEM
function logout() {
    sessionStorage.removeItem("myu_current_student");
    MYU_DATABASE.currentStudent = null;
    window.location.href = "login.html";
}

// 7. DATA RENDERING
function renderPersonalData() {
    const session = getCurrentStudent();
    if (!session) return;

    const student = MYU_DATABASE.students.find(item => item.username === session.username);
    if (!student) return;

    MYU_DATABASE.currentStudent = student;

    const personal = student.personalData || {};
    const contact = student.contactData || {};
    const guardian = student.guardianData || {};
    const qualification = student.qualificationData || {};
    const military = student.militaryData || {};

    const fields = {
        studentName: personal.name || student.nameAr,
        studentCode: personal.code,
        studentGender: personal.gender,
        studentBirthDate: personal.birthDate,
        studentNationalId: personal.nationalId,
        studentIssueDate: personal.issueDate,
        studentReligion: personal.religion,
        studentNationality: personal.nationality,
        studentCardType: personal.cardType,
        studentCardCategory: personal.cardCategory,
        studentIssuePlace: personal.issuePlace,
        contactGovernorate: contact.governorate,
        contactAddress: contact.address,
        contactHomePhone: contact.homePhone,
        contactEmail: contact.email,
        contactPostBox: contact.postBox,
        contactMobile: contact.mobile,
        contactFax: contact.fax,
        guardianName: guardian.name,
        guardianRelation: guardian.relation,
        guardianOccupation: guardian.occupation,
        guardianGovernorate: guardian.governorate,
        guardianHomePhone: guardian.homePhone,
        guardianNationality: guardian.nationality,
        guardianWorkAddress: guardian.workAddress,
        guardianAddress: guardian.address,
        guardianMobile: guardian.mobile,
        guardianFax: guardian.fax,
        qualificationName: qualification.name,
        qualificationSchool: qualification.school,
        qualificationDivision: qualification.division,
        qualificationSeat: qualification.seatNumber,
        qualificationSat1: qualification.sat1,
        qualificationYear: qualification.year,
        qualificationPercentage: qualification.percentage,
        qualificationRegistration: qualification.registrationNumber,
        qualificationSat2: qualification.sat2,
        qualificationDate: qualification.registrationDate,
        militaryStatus: military.status,
        militaryNumber: military.number
        

    };

    Object.entries(fields).forEach(([elementId, value]) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value !== undefined && value !== null && value !== "" ? value : "-";
        }
    });

    const sidebarName = document.getElementById("sidebarStudentName");
    if (sidebarName) {
        sidebarName.textContent = currentLanguage === "ar" ? student.nameAr : student.nameEn;
    }
}

// 8. INITIALIZE APPLICATION (Merged Event Listeners)
document.addEventListener("DOMContentLoaded", function() {
    // Apply initial language & date
    changeLanguage(currentLanguage);
    updateDate();

    // Setup Login Form Event
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            login(username, password);
        });
    }

    // Setup Language Toggle Button
    const languageToggleBtn = document.getElementById("languageToggle");
    if (languageToggleBtn) {
        languageToggleBtn.addEventListener("click", () => {
            const newLanguage = currentLanguage === "ar" ? "en" : "ar";
            changeLanguage(newLanguage);
        });
    }

    // Setup Logout Button
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }

    // Setup Remember Me Checkbox
    const rememberCheckbox = document.getElementById("rememberMe");
    if (rememberCheckbox) {
        rememberCheckbox.addEventListener("change", function() {
            localStorage.setItem("myu_remember", this.checked);
        });
        rememberCheckbox.checked = localStorage.getItem("myu_remember") === "true";
    }

    // Setup Forgot Password
    const forgotPasswordButton = document.getElementById("forgotPassword");
    if (forgotPasswordButton) {
        forgotPasswordButton.addEventListener("click", function(event) {
            event.preventDefault();
            showMessage(translations[currentLanguage].forgotMessage, "info");
        });
    }

    // Session Protection Control
    const currentPage = window.location.pathname.split("/").pop();
    const publicPages = ["", "login.html", "index.html"];

    if (!publicPages.includes(currentPage)) {
        const session = getCurrentStudent();
        if (!session) {
            window.location.href = "login.html";
            return; // إيقاف التنفيذ فوراً بعد التوجيه
        }
        
        if (currentPage === "personal-data.html") {
            renderPersonalData();
        }
    }
});

/* ==========================================
   ACADEMIC RESULTS RENDERING ENGINE (ACCORDION & MATCHED VERSION)
   ========================================== */

function renderResults() {
    const container = document.getElementById("resultsContainer");
    const selector = document.getElementById("semesterSelect");

    if (!container || !selector) return;

    const session = getCurrentStudent();
    if (!session) return;

    const student = MYU_DATABASE.students.find(item => item.username === session.username);
    if (!student) return;

    const language = currentLanguage;
    const isArabic = language === "ar";
    const t = translations[language];
    const semesters = student.results || [];

    const selectedValue = selector.value || "all";
    selector.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = t.allSemesters;
    selector.appendChild(allOption);

    semesters.forEach(semester => {
        const option = document.createElement("option");
        option.value = semester.id;
        option.textContent = isArabic ? semester.nameAr : semester.nameEn;
        selector.appendChild(option);
    });

    selector.value = semesters.some(semester => semester.id === selectedValue) || selectedValue === "all"
        ? selectedValue
        : "all";

    const selectedSemesters = selector.value === "all"
        ? semesters
        : semesters.filter(semester => semester.id === selector.value);

    if (selectedSemesters.length === 0) {
        container.innerHTML = `
            <div class="results-empty-alert">
                <span>${t.noResults}</span>
            </div>
        `;
        return;
    }

    container.innerHTML = selectedSemesters.map(semester => {
        const semesterName = isArabic ? semester.nameAr : semester.nameEn;

        // حالة: لم يتم إعلان النتيجة (توظيف وسم details ليدعم الـ Accordion)
        if (!semester.announced) {
            return `
                <details class="uni-accordion-item" open>
                    <summary class="uni-accordion-header">
                        <span class="uni-accordion-title">
                            <i class="fa-solid fa-caret-down font-arrow"></i>
                            ${semesterName}
                        </span>
                    </summary>
                    <div class="uni-accordion-content-inner">
                        <div class="uni-results-not-announced-box">
                            ${isArabic ? "لم يتم إعلان النتيجة" : "Results not announced"}
                        </div>
                    </div>
                </details>
            `;
        }

        const courses = semester.courses || [];
        const rows = courses.map(course => {
            const courseName = isArabic ? course.nameAr : course.nameEn;
            const gradeName = isArabic ? course.gradeAr : course.gradeEn;

            return `
                <tr>
                    <td>${course.code}</td>
                    <td class="text-start-align">${courseName}</td>
                    <td>${course.hours.toFixed(1)}</td>
                    <td><span class="uni-grade-text">${gradeName}</span></td>
                </tr>
            `;
        }).join("");

        const summary = semester.summary || {};

        // عرض درجات الطالب والملخص الشريطي السفلي المدمج
        return `
            <details class="uni-accordion-item" open>
                <summary class="uni-accordion-header">
                    <span class="uni-accordion-title">
                        <i class="fa-solid fa-caret-down font-arrow"></i>
                        ${semesterName}
                    </span>
                </summary>
                <div class="uni-accordion-content-inner">
                    <div class="results-table-wrapper">
                        <table class="uni-portal-table">
                            <thead>
                                <tr>
                                    <th style="width: 15%;">${isArabic ? "الكود" : "Code"}</th>
                                    <th style="width: 55%; text-align: start;">${isArabic ? "المقرر" : "Course"}</th>
                                    <th style="width: 15%;">${isArabic ? "الساعات المعتمدة" : "Credit Hours"}</th>
                                    <th style="width: 15%;">${isArabic ? "التقدير" : "Grade"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>
                    </div>

                    <div class="uni-semester-strip-summary">
                        <div class="strip-item">
                            <span>${isArabic ? "المعدل الفصلي" : "Semester GPA"}:</span>
                            <strong>${summary.gpa ?? "0.0"}</strong>
                        </div>
                        <div class="strip-item">
                            <span>${isArabic ? "المعدل التراكمي" : "Cumulative GPA"}:</span>
                            <strong>${summary.gpa ?? "0.0"}</strong>
                        </div>
                        <div class="strip-item">
                            <span>${isArabic ? "الساعات المسجلة" : "Registered Hours"}:</span>
                            <strong>${summary.totalHours ?? "0"}</strong>
                        </div>
                        <div class="strip-item">
                            <span>${isArabic ? "الساعات المكتسبة" : "Earned Hours"}:</span>
                            <strong>${summary.earnedHours ?? "0"}</strong>
                        </div>
                        <div class="strip-item">
                            <span>${isArabic ? "مجموع الدرجات" : "Total Points"}:</span>
                            <strong>0.0</strong>
                        </div>
                    </div>
                </div>
            </details>
        `;
    }).join("");
}

// Initialize results page
document.addEventListener("DOMContentLoaded", function() {
    const resultsPage = document.body.classList.contains("results-page");
    if (!resultsPage) return;

    const selector = document.getElementById("semesterSelect");
    renderResults();

    if (selector) {
        selector.addEventListener("change", renderResults);
    }
});

/* =========================================
   STUDENT ID CARD DATA
========================================= */

function renderStudentCard() {

    const session = getCurrentStudent();

    if (!session || !MYU_DATABASE || !MYU_DATABASE.students) {
        return;
    }

    const student = MYU_DATABASE.students.find(
        item => item.username === session.username
    );

    if (!student) return;

    const language = localStorage.getItem("myu_language") || "ar";

    const fullName = language === "ar"
        ? (student.nameAr || session.nameAr)
        : (student.nameEn || session.nameEn);

    const studentNumber = student.username || student.id;

    const faculty = student.faculty || "";

    const department =
        student.department ||
        student.major ||
        student.specialization ||
        "";

    const nameElement = document.getElementById("cardStudentName");
    const numberElement = document.getElementById("cardStudentNumber");
    const facultyElement = document.getElementById("cardStudentFaculty");
    const departmentElement = document.getElementById("cardStudentDepartment");

    if (nameElement) nameElement.textContent = fullName || "—";
    if (numberElement) numberElement.textContent = studentNumber || "—";
    if (facultyElement) facultyElement.textContent = faculty || "—";
    if (departmentElement) departmentElement.textContent = department || "—";
}

/* Render card when page loads */
document.addEventListener("DOMContentLoaded", function () {

    if (document.body.classList.contains("student-cards-page")) {
        renderStudentCard();
    }

});
/* DOWNLOAD STUDENT CARD */

document.addEventListener("DOMContentLoaded", function () {

    const downloadButton = document.getElementById("downloadStudentCard");
    const card = document.getElementById("studentIdCard");

    if (!downloadButton || !card) return;

    downloadButton.addEventListener("click", async function () {

        if (typeof html2canvas === "undefined") {
            alert("تعذر تحميل أداة إنشاء صورة البطاقة.");
            return;
        }

        try {
            downloadButton.disabled = true;

            const canvas = await html2canvas(card, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff"
            });

            const link = document.createElement("a");
            link.download = "MYU-Student-Card.png";
            link.href = canvas.toDataURL("image/png");
            link.click();

        } catch (error) {
            console.error("Card download error:", error);
            alert("حدث خطأ أثناء تحميل البطاقة.");
        } finally {
            downloadButton.disabled = false;
        }

    });

});


/* =====================================
   INBOX MOCK DATABASE
===================================== */

const INBOX_DATABASE = {
    received: [],
    sent: []
};

let currentInboxFolder = "received";


/* RENDER MESSAGES */

function renderInbox(folder = currentInboxFolder) {

    currentInboxFolder = folder;

    const container = document.getElementById("messagesContainer");

    if (!container) return;

    const language = localStorage.getItem("myu_language") || "ar";
    const messages = INBOX_DATABASE[folder] || [];

    document.querySelectorAll(".inbox-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.folder === folder);
    });

    if (messages.length === 0) {
        container.innerHTML = `
            <div class="empty-messages">
                ${language === "ar" ? "لا توجد رسائل" : "No messages"}
            </div>
        `;
        return;
    }

    container.replaceChildren();

    messages.forEach(message => {

        const item = document.createElement("div");
        item.className = "message-item";

        const subject = document.createElement("h3");
        subject.textContent = message.subject;

        const body = document.createElement("p");
        body.textContent = message.body;

        const date = document.createElement("span");
        date.className = "message-date";
        date.textContent = message.date;

        item.append(subject, body, date);
        container.appendChild(item);
    });
}


/* INBOX EVENTS */

document.addEventListener("DOMContentLoaded", function () {

    if (!document.body.classList.contains("inbox-page")) return;

    renderInbox();

    document.querySelectorAll(".inbox-tab").forEach(tab => {
        tab.addEventListener("click", function () {
            renderInbox(this.dataset.folder);
        });
    });

    const overlay = document.getElementById("composeOverlay");
    const openBtn = document.getElementById("openComposeBtn");
    const closeBtn = document.getElementById("closeComposeBtn");
    const form = document.getElementById("composeForm");

    openBtn.addEventListener("click", () => {
        overlay.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.classList.remove("show");
        }
    });

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const subject = document.getElementById("messageSubject").value.trim();
        const body = document.getElementById("messageBody").value.trim();

        if (!subject || !body) return;

        INBOX_DATABASE.sent.unshift({
            subject,
            body,
            date: new Date().toLocaleDateString("ar-EG")
        });

        form.reset();
        overlay.classList.remove("show");

        renderInbox("sent");

        alert(
            localStorage.getItem("myu_language") === "en"
            ? "Message saved successfully (demo)."
            : "تم حفظ الرسالة بنجاح (تجريبي)."
        );
    });

});

/* =====================================
   REGISTRATION FORM PAGE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (!document.body.classList.contains("registration-page")) {
        return;
    }

    const closeButton = document.getElementById("closeRegistrationAlert");
    const alertBox = document.getElementById("registrationExpiredAlert");

    if (closeButton && alertBox) {
        closeButton.addEventListener("click", function () {
            alertBox.style.display = "none";
        });
    }

});
// ================= GRIEVANCES PAGE =================

// مواد تجريبية للاختبار، ويمكن ربطها بقاعدة البيانات لاحقاً
const grievanceCourses = [
    {
        id: "CSE101",
        nameAr: "مقدمة في البرمجة",
        nameEn: "Introduction to Programming"
    },
    {
        id: "MAT101",
        nameAr: "رياضيات 1",
        nameEn: "Mathematics I"
    },
    {
        id: "PHY101",
        nameAr: "فيزياء",
        nameEn: "Physics"
    },
    {
        id: "CSE201",
        nameAr: "هياكل البيانات",
        nameEn: "Data Structures"
    }
];

function getGrievanceLanguage() {
    return document.documentElement.lang === "en" ? "en" : "ar";
}

function getGrievanceStorageKey() {
    const student = typeof getCurrentStudent === "function"
        ? getCurrentStudent()
        : null;

    const studentId = student?.username || "default";

    return `myu_grievances_${studentId}`;
}

function getGrievanceRequests() {
    try {
        return JSON.parse(localStorage.getItem(getGrievanceStorageKey())) || [];
    } catch (error) {
        return [];
    }
}

function populateGrievanceCourses() {
    const courseSelect = document.getElementById("grievanceCourse");

    if (!courseSelect) return;

    const language = getGrievanceLanguage();

    courseSelect.innerHTML = `
        <option value="">
            ${language === "ar" ? "------" : "------"}
        </option>
    `;

    grievanceCourses.forEach(course => {
        const option = document.createElement("option");

        option.value = course.id;
        option.textContent = language === "ar"
            ? course.nameAr
            : course.nameEn;

        courseSelect.appendChild(option);
    });
}

function renderGrievanceRequests() {
    const container = document.getElementById("grievanceRequests");

    if (!container) return;

    const requests = getGrievanceRequests();
    const language = getGrievanceLanguage();

    if (requests.length === 0) {
        container.innerHTML = `
            <div class="grievance-empty">
                ${language === "ar" ? "لا توجد طلبات" : "No requests found"}
            </div>
        `;
        return;
    }

    container.innerHTML = "";

    requests.forEach(request => {
        const course = grievanceCourses.find(
            item => item.id === request.courseId
        );

        const card = document.createElement("article");
        card.className = "grievance-request-card";

        const title = document.createElement("h3");
        title.textContent = course
            ? (language === "ar" ? course.nameAr : course.nameEn)
            : request.courseId;

        const year = document.createElement("p");
        year.textContent = `${language === "ar" ? "السنة الدراسية:" : "Academic year:"} ${request.year}`;

        const semester = document.createElement("p");
        const semesterNames = {
            first: language === "ar" ? "الأول" : "First",
            second: language === "ar" ? "الثاني" : "Second",
            summer: language === "ar" ? "الصيفي" : "Summer"
        };

        semester.textContent =
            `${language === "ar" ? "الفصل الدراسي:" : "Semester:"} ${semesterNames[request.semester]}`;

        const notes = document.createElement("p");
        notes.textContent =
            `${language === "ar" ? "ملاحظات:" : "Notes:"} ${request.notes || "-"}`;

        const status = document.createElement("span");
        status.className = "grievance-request-status";
        status.textContent =
            language === "ar" ? "قيد المراجعة" : "Under review";

        card.append(title, year, semester, notes, status);
        container.appendChild(card);
    });
}

function saveGrievanceRequest() {
    const year = document.getElementById("grievanceYear");
    const semester = document.getElementById("grievanceSemester");
    const course = document.getElementById("grievanceCourse");
    const notes = document.getElementById("grievanceNotes");
    const message = document.getElementById("grievanceMessage");

    if (!year || !semester || !course || !notes || !message) return;

    const language = getGrievanceLanguage();

    if (!course.value) {
        message.textContent = language === "ar"
            ? "من فضلك اختر المادة أولاً"
            : "Please select a course first";

        message.className = "grievance-message error";
        return;
    }

    const request = {
        id: Date.now(),
        year: year.value,
        semester: semester.value,
        courseId: course.value,
        notes: notes.value.trim(),
        status: "pending",
        createdAt: new Date().toISOString()
    };

    const requests = getGrievanceRequests();
    requests.unshift(request);

    localStorage.setItem(
        getGrievanceStorageKey(),
        JSON.stringify(requests)
    );

    notes.value = "";
    course.value = "";

    message.textContent = language === "ar"
        ? "تم حفظ طلب التظلم بنجاح"
        : "Grievance request saved successfully";

    message.className = "grievance-message success";

    renderGrievanceRequests();
}

function initializeGrievancesPage() {
    if (!document.body.classList.contains("grievances-page")) return;

    populateGrievanceCourses();
    renderGrievanceRequests();

    const saveButton = document.getElementById("saveGrievanceBtn");

    if (saveButton) {
        saveButton.addEventListener("click", saveGrievanceRequest);
    }
}

document.addEventListener("DOMContentLoaded", initializeGrievancesPage);


/* =====================================
   GLOBAL SIDEBAR DROPDOWN SYSTEM
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.querySelector(".sidebar-navigation");

    if (!sidebar) return;

    const groups = sidebar.querySelectorAll(".sidebar-group");
    const currentPage = window.location.pathname.split("/").pop();

    // فتح القسم الذي يحتوي الصفحة الحالية
    groups.forEach(group => {

        const links = group.querySelectorAll(".sidebar-sublink");

        links.forEach(link => {

            const linkPage = link.getAttribute("href");

            if (linkPage === currentPage) {
                link.classList.add("active");
                group.classList.add("open");

                const toggle = group.querySelector(".expandable-toggle");

                if (toggle) {
                    toggle.setAttribute("aria-expanded", "true");
                }
            }

        });

    });

    // فتح وإغلاق الأقسام عند الضغط على السهم أو اسم القسم
    groups.forEach(group => {

        const toggle = group.querySelector(".expandable-toggle");

        if (!toggle) return;

        toggle.addEventListener("click", function () {

            const isOpen = group.classList.toggle("open");

            toggle.setAttribute("aria-expanded", String(isOpen));

        });

    });

    // تحديد الرابط النشط في القائمة الرئيسية
    sidebar.querySelectorAll(".sidebar-link:not(.expandable-toggle)")
        .forEach(link => {

            const linkPage = link.getAttribute("href");

            if (linkPage && linkPage !== "#" && linkPage === currentPage) {
                link.classList.add("active");
            }

        });

});
/* ==========================================
   COURSE WITHDRAWAL PAGE ENGINE
   ========================================== */

function getStudentRegisteredCourses() {
    const session = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    const student = session
        ? MYU_DATABASE.students.find(s => s.username === session.username)
        : MYU_DATABASE.students[0];
    return student?.registeredCourses || [];
}

function getWithdrawalStorageKey() {
    const student = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    return `myu_withdrawals_${student?.username || "default"}`;
}

function getWithdrawalRequests() {
    try {
        return JSON.parse(localStorage.getItem(getWithdrawalStorageKey())) || [];
    } catch {
        return [];
    }
}

function showWithdrawalAlert(text, type = "success") {
    const alertBox = document.getElementById("withdrawalMessage");
    if (!alertBox) return;
    alertBox.textContent = text;
    alertBox.className = `withdrawal-alert-msg ${type}`;
    setTimeout(() => {
        alertBox.className = "withdrawal-alert-msg";
    }, 3500);
}

function requestCourseWithdrawal(courseCode) {
    const t = translations[currentLanguage];
    const courses = getStudentRegisteredCourses();
    const course = courses.find(c => c.code === courseCode);
    if (!course) return;

    const courseName = currentLanguage === "ar" ? course.nameAr : course.nameEn;
    if (!confirm(`${t.confirmWithdrawPrompt} ${courseName} (${course.code})؟`)) return;

    const requests = getWithdrawalRequests();
    if (requests.some(r => r.code === courseCode)) return;

    requests.push({
        code: course.code,
        nameAr: course.nameAr,
        nameEn: course.nameEn,
        hours: course.hours
    });

    localStorage.setItem(getWithdrawalStorageKey(), JSON.stringify(requests));
    renderWithdrawalPage();
    showWithdrawalAlert(t.withdrawSuccessMsg, "success");
}

function cancelCourseWithdrawal(courseCode) {
    const t = translations[currentLanguage];
    const updated = getWithdrawalRequests().filter(r => r.code !== courseCode);
    localStorage.setItem(getWithdrawalStorageKey(), JSON.stringify(updated));
    renderWithdrawalPage();
    showWithdrawalAlert(t.withdrawCancelMsg, "error");
}

function renderWithdrawalPage() {
    const coursesBody = document.getElementById("registeredCoursesBody");
    const requestsSection = document.getElementById("withdrawalRequestsSection");
    const requestsBody = document.getElementById("withdrawalRequestsBody");
    if (!coursesBody) return;

    const isAr = currentLanguage === "ar";
    const t = translations[currentLanguage];
    const courses = getStudentRegisteredCourses();
    const requests = getWithdrawalRequests();

    coursesBody.innerHTML = courses.map(course => {
        const isRequested = requests.some(r => r.code === course.code);
        const name = isAr ? course.nameAr : course.nameEn;
        return `
            <tr>
                <td>${course.code}</td>
                <td class="text-start-align">${name}</td>
                <td>${Number(course.hours).toFixed(1)}</td>
                <td>
                    <button type="button"
                        class="btn-withdraw-course"
                        ${isRequested ? "disabled" : ""}
                        onclick="requestCourseWithdrawal('${course.code}')">
                        ${isRequested ? t.withdrawnDone : t.withdrawBtn}
                    </button>
                </td>
            </tr>
        `;
    }).join("");

    if (requestsSection && requestsBody) {
        if (requests.length === 0) {
            requestsSection.style.display = "none";
        } else {
            requestsSection.style.display = "block";
            requestsBody.innerHTML = requests.map(req => {
                const name = isAr ? req.nameAr : req.nameEn;
                return `
                    <tr>
                        <td>${req.code}</td>
                        <td class="text-start-align">${name}</td>
                        <td>${Number(req.hours).toFixed(1)}</td>
                        <td><span class="withdrawal-status-badge">${t.underReviewStatus}</span></td>
                        <td>
                            <button type="button" class="btn-cancel-withdrawal" onclick="cancelCourseWithdrawal('${req.code}')">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                    </tr>
                `;
            }).join("");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleWithdrawalCourses");
    const panel = document.getElementById("withdrawalCoursesPanel");
    const plusIcon = document.getElementById("withdrawalPlusIcon");

    if (toggleBtn && panel) {
        toggleBtn.addEventListener("click", function () {
            const isOpen = panel.classList.toggle("open");
            panel.style.display = isOpen ? "block" : "none";
            if (plusIcon) plusIcon.textContent = isOpen ? "−" : "+";
        });
    }

    if (document.getElementById("registeredCoursesBody")) {
        renderWithdrawalPage();
    }
});
/* ==========================================
   FEES STATEMENT ENGINE (بيانات سداد الرسوم)
   ========================================== */

function renderFeesStatement() {
    const tbody = document.getElementById("feesTableBody");
    if (!tbody) return;

    const session = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    const student = (session && MYU_DATABASE.students.find(s => s.username === session.username))
        || MYU_DATABASE.students[0];

    if (!student) return;

    const isAr = currentLanguage === "ar";
    const t = translations[currentLanguage];

    // تعبئة بيانات الطالب بدقة كما في الصورة الأصلية
    const nameEl = document.getElementById("feesStudentName");
    const facultyEl = document.getElementById("feesStudentFaculty");
    const codeEl = document.getElementById("feesStudentCode");
    const yearEl = document.getElementById("feesAcademicYear");
    const timeEl = document.getElementById("feesTimestamp");

    if (nameEl) nameEl.textContent = isAr ? (student.personalData?.name || student.nameAr) : student.nameEn;
    if (facultyEl) facultyEl.textContent = isAr ? "هندسة الحاسب" : (student.faculty || "Computer Engineering");
    if (codeEl) codeEl.textContent = student.username;
    if (yearEl) yearEl.textContent = "2025-2026";
    if (timeEl) {
        const now = new Date();
        const dateStr = now.toLocaleDateString("en-GB");
        const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
        timeEl.textContent = isAr ? `تمت الطباعة بواسطة نظام ابن الهيثم ${dateStr} ${timeStr}` : `Printed by Ebn Al-Haytham ${dateStr} ${timeStr}`;
    }

    const groups = student.feesRecords || [];
    let totalCharges = 0;
    let totalPayments = 0;
    let html = "";

    groups.forEach(group => {
        const semTitle = isAr ? group.semesterAr : group.semesterEn;
        html += `
            <tr class="fees-semester-divider">
                <td colspan="6">${semTitle}</td>
            </tr>
        `;

        group.items.forEach(item => {
            if (item.isPaid) {
                totalPayments += Number(item.amount);
            } else {
                totalCharges += Number(item.amount);
            }

            const title = isAr ? item.titleAr : item.titleEn;
            const currency = isAr ? item.currencyAr : item.currencyEn;
            const rowClass = item.isPaid ? "fees-row-paid" : "fees-row-charge";

            html += `
                <tr class="${rowClass}">
                    <td>${title}</td>
                    <td>${item.date}</td>
                    <td>${currency}</td>
                    <td>${Number(item.amount).toFixed(2)}</td>
                    <td>${item.notes || ""}</td>
                    <td>${item.receipt || ""}</td>
                </tr>
            `;
        });
    });

    const netBalance = Math.max(0, totalCharges - totalPayments).toFixed(2);
    const currencyLabel = isAr ? "جنيه مصري" : "EGP";

    html += `
        <tr class="fees-total-row">
            <td colspan="3" style="text-align: start; padding-inline-start: 15px;">${t.totalBalanceLabel}</td>
            <td>${netBalance} ${currencyLabel}</td>
            <td colspan="2"></td>
        </tr>
    `;

    tbody.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("feesTableBody")) return;

    renderFeesStatement();

    const printBtn = document.getElementById("printFeesBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }
});


    renderFeesStatement();

    const printBtn = document.getElementById("printFeesBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }
;
/* ==========================================
   PAYMENT PERMISSION ENGINE (إذن الدفع)
   ========================================== */

function renderPaymentPermission() {
    const coursesBody = document.getElementById("permCoursesBody");
    const summaryBody = document.getElementById("permSummaryBody");
    if (!coursesBody || !summaryBody) return;

    const session = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    const student = (session && MYU_DATABASE.students.find(s => s.username === session.username))
        || MYU_DATABASE.students;

    if (!student) return;

    const isAr = currentLanguage === "ar";
    const permData = student.paymentPermissionData;
    if (!permData) return;

    // تعبئة الترويسة وبيانات الطالب
    const nameEl = document.getElementById("permStudentName");
    const nidEl = document.getElementById("permNationalId");
    const codeEl = document.getElementById("permStudentCode");
    const facultyEl = document.getElementById("permFacultyName");
    const timeEl = document.getElementById("permTimestamp");

    if (nameEl) nameEl.textContent = isAr ? (student.personalData?.name || student.nameAr) : student.nameEn;
    if (nidEl) nidEl.textContent = student.personalData?.nationalId || student.password;
    if (codeEl) codeEl.textContent = student.username;
    if (facultyEl) facultyEl.textContent = isAr ? "هندسة الحاسب" : (student.faculty || "Computer Engineering");
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = isAr
            ? `نظام ابن الهيثم لإدارة شئون الطلاب ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`
            : `Ebn Al-Haytham SIS ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }

    // جلب المقررات من registeredCourses الموحدة حسب الأكواد المطلوبة
    const allCourses = student.registeredCourses || [];
    const permCourses = permData.courseCodes
        .map(code => allCourses.find(c => c.code === code))
        .filter(Boolean);

    coursesBody.innerHTML = permCourses.map(course => `
        <tr>
            <td>${course.code}</td>
            <td>${isAr ? course.nameAr : course.nameEn}</td>
            <td>${course.hours}</td>
        </tr>
    `).join("");

    // تعبئة جدول الملخص المالي
    const currencyText = isAr ? "جنيه مصري" : "EGP";
    summaryBody.innerHTML = permData.summaryItems.map(item => `
        <tr class="${item.isTotal ? "summary-total-row" : ""}">
            <td class="summary-label-cell">${isAr ? item.labelAr : item.labelEn}</td>
            <td class="summary-value-cell">${item.amount}</td>
            <td class="summary-curr-cell">${currencyText}</td>
        </tr>
    `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("permCoursesBody")) return;

    renderPaymentPermission();

    const printBtn = document.getElementById("printPaymentBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }
});
/* ==========================================
   UPDATE PLATFORM ENGINE (تحديث المنصة)
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const syncBtn = document.getElementById("syncPlatformBtn");
    const resultBox = document.getElementById("platformSyncResult");
    if (!syncBtn || !resultBox) return;

    syncBtn.addEventListener("click", function () {
        const t = translations[currentLanguage];
        syncBtn.disabled = true;
        syncBtn.textContent = t.syncingPlatformText;
        resultBox.style.display = "none";

        setTimeout(() => {
            syncBtn.disabled = false;
            syncBtn.textContent = t.updateElectronicPlatformBtn;
            resultBox.textContent = t.syncSuccessText;
            resultBox.className = "platform-sync-result success";
            resultBox.style.display = "block";
        }, 800);
    });
});
/* ==========================================
   ABSENCE PAGE ENGINE (الغياب)
   ========================================== */

function renderAbsenceTable() {
    const tbody = document.getElementById("absenceTableBody");
    if (!tbody) return;

    const session = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    const student = (session && MYU_DATABASE.students.find(s => s.username === session.username))
        || MYU_DATABASE.students;

    if (!student) return;

    const isAr = currentLanguage === "ar";
    const t = translations[currentLanguage];

    const timeEl = document.getElementById("absenceTimestamp");
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = isAr
            ? `نظام ابن الهيثم لإدارة شئون الطلاب ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`
            : `Ebn Al-Haytham SIS ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }

    const records = student.absenceRecords || [];
    if (records.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6">${t.noAbsenceRecords}</td></tr>`;
        return;
    }

    tbody.innerHTML = records.map(item => {
        const isHigh = parseFloat(item.percentage) >= 25;
        return `
            <tr>
                <td>${item.code}</td>
                <td>${isAr ? item.courseAr : item.courseEn}</td>
                <td>${item.total}</td>
                <td>${isAr ? item.typeAr : item.typeEn}</td>
                <td>${item.count}</td>
                <td class="${isHigh ? "absence-warning-high" : ""}">${item.percentage}</td>
            </tr>
        `;
    }).join("");
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("absenceTableBody")) return;

    renderAbsenceTable();

    const printBtn = document.getElementById("printAbsenceBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }
});
/* ==========================================
   STUDY SCHEDULE ENGINE (الجدول الدراسي)
   ========================================== */

function renderStudySchedule() {
    const tbody = document.getElementById("studyScheduleBody");
    const cardsGrid = document.getElementById("scheduleView2Wrapper");
    if (!tbody) return;

    const session = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    const student = (session && MYU_DATABASE.students.find(s => s.username === session.username))
        || MYU_DATABASE.students;

    if (!student) return;

    const isAr = currentLanguage === "ar";

    // تعبئة بيانات الطالب
    const nameEl = document.getElementById("schedStudentName");
    const codeEl = document.getElementById("schedStudentCode");
    const programEl = document.getElementById("schedProgramName");
    const levelEl = document.getElementById("schedStudentLevel");
    const advisorEl = document.getElementById("schedAdvisorName");
    const timeEl = document.getElementById("scheduleTimestamp");

    if (nameEl) nameEl.textContent = isAr ? (student.personalData?.name || student.nameAr) : student.nameEn;
    if (codeEl) codeEl.textContent = student.username;
    if (programEl) programEl.textContent = isAr ? "هندسة الحاسب" : "Computer Engineering";
    if (levelEl) levelEl.textContent = isAr ? "الأول" : "Level 1";
    if (advisorEl) advisorEl.textContent = isAr ? "الأستاذ المساعد الدكتور" : "Assistant Professor Doctor";
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = isAr
            ? `نظام ابن الهيثم لإدارة شئون الطلاب ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`
            : `Ebn Al-Haytham SIS ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }

    const days = student.studyScheduleData || [];
    let tableHtml = "";
    let cardsHtml = "";

    days.forEach(day => {
        const dayName = isAr ? day.dayAr : day.dayEn;
        if (!day.slots || day.slots.length === 0) {
            tableHtml += `
                <tr>
                    <td class="sched-day-cell">${dayName}</td>
                    <td colspan="6" class="sched-empty-day-cell"></td>
                </tr>
            `;
        } else {
            day.slots.forEach((slot, index) => {
                tableHtml += `
                    <tr>
                        ${index === 0 ? `<td class="sched-day-cell" rowspan="${day.slots.length}">${dayName}</td>` : ""}
                        <td>${slot.period}</td>
                        <td>${slot.course}</td>
                        <td>${isAr ? slot.instructorAr : slot.instructorEn}</td>
                        <td>${isAr ? slot.typeAr : slot.typeEn}</td>
                        <td>${isAr ? slot.groupAr : slot.groupEn}</td>
                        <td>${slot.location}</td>
                    </tr>
                `;
            });

            cardsHtml += `
                <div class="sched-day-card">
                    <div class="sched-day-card-header">${dayName}</div>
                    ${day.slots.map(s => `
                        <div class="sched-slot-box">
                            <div class="sched-slot-time">${s.period} (${isAr ? s.typeAr : s.typeEn})</div>
                            <div class="sched-slot-course">${s.course}</div>
                            <div class="sched-slot-meta">${s.location} | ${isAr ? s.instructorAr : s.instructorEn}</div>
                        </div>
                    `).join("")}
                </div>
            `;
        }
    });

    tbody.innerHTML = tableHtml;
    if (cardsGrid) cardsGrid.innerHTML = cardsHtml;
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("studyScheduleBody")) return;

    renderStudySchedule();

    const printBtn = document.getElementById("printScheduleBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }

    // التبديل بين الشكل الأول والشكل الثاني
    const view1Wrapper = document.getElementById("scheduleView1Wrapper");
    const view2Wrapper = document.getElementById("scheduleView2Wrapper");
    document.querySelectorAll(".sched-tab-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".sched-tab-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const isView1 = this.dataset.view === "view1";
            if (view1Wrapper) view1Wrapper.style.display = isView1 ? "block" : "none";
            if (view2Wrapper) view2Wrapper.style.display = isView1 ? "none" : "grid";
        });
    });
});
/* ==========================================
   EXAM SCHEDULE ENGINE (جدول الامتحانات)
   ========================================== */

function renderExamSchedule() {
    const tbody = document.getElementById("examScheduleBody");
    if (!tbody) return;

    const session = typeof getCurrentStudent === "function" ? getCurrentStudent() : null;
    const student = (session && MYU_DATABASE.students.find(s => s.username === session.username))
        || MYU_DATABASE.students;

    if (!student) return;

    const isAr = currentLanguage === "ar";

    const nameEl = document.getElementById("examStudentName");
    const codeEl = document.getElementById("examStudentCode");
    const yearEl = document.getElementById("examYearTerm");
    const timeEl = document.getElementById("examTimestamp");

    if (nameEl) nameEl.textContent = isAr ? (student.personalData?.name || student.nameAr) : student.nameEn;
    if (codeEl) codeEl.textContent = student.username;
    if (yearEl) yearEl.textContent = isAr ? "2026-2027 الأول" : "2026-2027 First";
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = isAr
            ? `نظام ابن الهيثم لإدارة شئون الطلاب ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`
            : `Ebn Al-Haytham SIS ${now.toLocaleDateString("en-GB")} ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }

    const exams = student.examScheduleData || [];
    tbody.innerHTML = exams.map(exam => `
        <tr>
            <td>${exam.date}</td>
            <td>${exam.code}</td>
            <td>${exam.course}</td>
            <td dir="ltr">${exam.time}</td>
            <td>${exam.committee}</td>
            <td>${exam.location}</td>
            <td>${exam.placeNumber}</td>
            <td>${exam.seatNumber}</td>
            <td>${exam.notes || ""}</td>
        </tr>
    `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("examScheduleBody")) return;

    renderExamSchedule();

    const printBtn = document.getElementById("printExamBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }
});
