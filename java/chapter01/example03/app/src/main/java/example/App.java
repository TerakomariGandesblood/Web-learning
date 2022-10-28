
package example;

public class App {
  // constructor
  App(int i) {}

  public String getGreeting() {
    return "Hello World!";
  }

  // 参数从 0 开始，第一个不是程序名字
  public static void main(String[] args) throws Exception {
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
