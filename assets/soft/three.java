// 1. هنا بنعمل "الكتالوج" أو التصميم بتاع العربية
class Car {
    String model;
    int speed;

    // دالة بتمثل وظيفة للعربية
    void drive() {
        System.out.println(model + " is driving at " + speed + " km/h.");
    }
}

public class Main {
    public static void main(String[] args) {
        // 2. هنا بنصنع "كائنات حقيقية" من الكتالوج ده
        Car car1 = new Car();
        car1.model = "BMW";
        car1.speed = 120;

        Car car2 = new Car();
        car2.model = "Toyota";
        car2.speed = 90;

        // 3. بنشغل الوظائف لكل عربية لوحدها
        car1.drive();
        car2.drive();
    }
}
