public class Main {
    public static void main(String[] args) {
        System.out.println("--- Part 1: Inheritance & super ---");
        
        // بنصنع كائن من الابن، فهينادي تلقائياً على كونسركتور الأب الأول!
        Dog d = new Dog("Rex");
        d.eat();  // دالة ورثها من الأب
        d.bark(); // دالة خاصة بالابن لوحده
    }
}

// الكلاس الأب
class Animal {
    protected String name; // protected يعني الابن يقدر يشوفها ويستخدمها

    Animal(String name) {
        this.name = name;
        System.out.println("1. Animal constructor called.");
    }

    void eat() {
        System.out.println(name + " is eating.");
    }
}

// الكلاس الابن بيورث من الأب
class Dog extends Animal {
    Dog(String name) {
        super(name); // لازم تكون أول سطر عشان تبعت الاسم للأب
        System.out.println("2. Dog constructor called.");
    }

    void bark() {
        System.out.println(name + " says: Bow wow!");
    }
}
