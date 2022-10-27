
package example;

public class App {
  // constructor
  App(int i) {}

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

  // 参数从 0 开始，第一个不是程序名字
  public static void main(String[] args) throws Exception {
    byte b = 0b00110101;
    // short
    f(b);

    for (char c : new App(0).getGreeting().toCharArray()) {
      System.out.print(c);
    }

    System.out.println();

    // break continue 可以带标签，在嵌套的循环中使用

    // 可以是整数或字符串
    String str = "red";
    switch (str) {
      case "red":
        System.out.println("red");
        break;

      default:
        System.out.println("default");
        break;
    }
  }
}
