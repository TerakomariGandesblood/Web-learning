
package example;

public class App {
  public String getGreeting() {
    return "Hello World!";
  }

  public static void f(char s) {
    System.out.println("char");
  }

  public static void f(short s) {
    System.out.println("short");
  }

  public static void f(int s) {
    System.out.println("int");
  }

  public static void main(String[] args) throws Exception {
    byte b = 0b00110101;
    // short
    // TODO 似乎只能提升到 short
    f(b);
    // 如果传入数据的类型比方法参数的类型更宽，需要强制类型转换

    // 运行垃圾回收器
    System.gc();
  }
}

class Bird {
  // 如果没有定义构造器则会生成默认构造器
  // 如果已经定义了一个构造器，则不会生成默认构造器
  Bird() {
    // 调用其他构造器，只能用一次，必须出现在开头
    this(1);
  }
  Bird(int i) {}

  // 当在类中定义了一个对象引用而不将其初始化时，这个引用就会被赋予一个特殊值 null
  String str;
  //类中的变量定义顺序决定了初始化的顺序。即使分散到方法定义之间，变量定义仍然会在任何方法（包括构造器）调用之前就被初始化
}
