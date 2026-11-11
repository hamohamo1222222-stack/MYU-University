public class Main {
    public static void main(String[] args) {
        System.out.println("--- Task 4: Array of Objects ---");

        // 1. عمل مصفوفة تجمع 4 طلاب مع بعض باستخدام الـ Constructor
        Student[] students = {
            new Student("Sara", 1001, 3.8),
            new Student("Omar", 1002, 2.9),
            new Student("Layla", 1003, 3.5),
            new Student("Youssef", 1004, 3.1)
        };

        // متغيرات لمتابعة أعلى GPA وعدد المتفوقين
        double highestGpa = students[0].gpa;
        String highestName = students[0].name;
        int honorsCount = 0;

        // 2. الـ Loop السحرية اللي بتلف على الطلاب كلهم وتعمل العمليات
        for (Student s : students) {
            // أ) نطبع بيانات الطالب الحالي
            s.displayInfo();

            // ب) نختبر لو الـ GPA بتاعه هو الأعلى حتى الآن
            if (s.gpa > highestGpa) {
                highestGpa = s.gpa;
                highestName = s.name;
            }

            // ج) نختبر لو الطالب متفوق ونزود العداد
            if (s.isHonors()) {
                honorsCount++;
            }
        }

        System.out.println("---------------------------------");
        // 3. طباعة النتائج النهائية
        System.out.println("Highest GPA: " + highestName + " (" + highestGpa + ")");
        System.out.println("Honors students: " + honorsCount);
    }
}

class Student {
    String name;
    int id;
    double gpa;

    // الـ Constructor اللي بياخد 3 قيم
    public Student(String name, int id, double gpa) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
    }

    void displayInfo() {
        System.out.println("Name: " + name + " | ID: " + id + " | GPA: " + gpa);
    }

    boolean isHonors() {
        return (gpa >= 3.5);
    }
}
