// دائماً نضع الـ Main فوق لتجنب مشاكل الكومبيلر الأونلاين
public class Main {
    public static void main(String[] args) {
        
        System.out.println("--- Task 1 & 2 ---");

        // إنشاء كائنين لطلاب
        Student s1 = new Student();
        s1.name = "Sara";
        s1.id = 1001;
        s1.gpa = 3.8;

        Student s2 = new Student();
        s2.name = "Omar";
        s2.id = 1002;
        s2.gpa = 2.9;

        // استدعاء دالة الطباعة لعرض البيانات
        s1.displayInfo();
        s2.displayInfo();

        System.out.println("After update:");
        // تعديل الـ GPA لعمر باستخدام دالة التحديث
        s2.updateGpa(3.6);
        s2.displayInfo();

        // فحص هل هم متفوقين (Honors) أم لا
        System.out.println("Sara honors? " + s1.isHonors());
        System.out.println("Omar honors? " + s2.isHonors());
    }
}

// كلاس الطالب وبداخله المتغيرات والدوال (Methods)
class Student {
    String name;
    int id;
    double gpa;

    // دالة لطباعة البيانات
    void displayInfo() {
        System.out.println("Name: " + name + " | ID: " + id + " | GPA: " + gpa);
    }

    // دالة لتحديث الـ GPA
    void updateGpa(double newGpa) {
        gpa = newGpa;
    }

    // دالة ترجع قيمة منطقية (صح/خطأ) بناءً على الشرط
    boolean isHonors() {
        return (gpa >= 3.5);
    }
}
