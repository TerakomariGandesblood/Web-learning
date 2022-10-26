
package example;

public class App {
  public String get_Greeting() {
    return "Hello World!";
  }

  public static void main(String[] args) throws Exception {
    System.out.println(new App().get_Greeting());
  }
}
