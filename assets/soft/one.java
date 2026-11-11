public class Main {
    // عملنا دالة اسمها add بتجمع رقمين وترجع الناتج
    static int add(int num1, int num2) {
        int sum = num1 + num2;
        return sum;
    }

    public static void main(String[] args) {
        // هنا بننادي على الدالة ونديها الأرقام
        int result = add(5, 3);
        
        System.out.println("Sum from function = " + result);
    }
}
