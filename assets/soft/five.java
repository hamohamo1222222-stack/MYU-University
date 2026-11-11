public class Main {
    public static void main(String args[]) {
        System.out.println("--- Task 3: Constructors ---");

        // 1. تجربة الـ Constructor الفاضي (تلقائي)
        Student s3 = new Student(); 
        
        // 2. تجربة الـ Constructor اللي بياخد 3 قيم (استخدام this)
        Student s4 = new Student("Layla", 1003, 3.5); 
        
        // 3. تجربة الـ Constructor اللي بياخد قيمتين بس
        Student s5 = new Student("Youssef", 1004); 

        // طباعة الطلاب عشان نشوف القيم المبدئية
        s3.displayInfo();
        s4.displayInfo();
        s5.displayInfo();
    }
}

class Student {
    String name;
    int id;
    double gpa;

    // 1. Default Constructor
    public Student() {
        name = "Unknown";
        id = 0;
        gpa = 0.0;
    }

    // 2. Constructor with 3 parameters (using this)
    public Student(String name, int id, double gpa) {
        this.name = name; // هاتي الاسم اللي مبعوت وحطيه في الـ name بتاع الكلاس
        this.id = id;
        this.gpa = gpa;
    }

    // 3. Overloaded Constructor with 2 parameters
    public Student(String name, int id) {
        this.name = name;
        this.id = id;
        this.gpa = 0.0;
    }

    void displayInfo() {
        System.out.println("Name: " + name + " | ID: " + id + " | GPA: " + gpa);
    }
}
