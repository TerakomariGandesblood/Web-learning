
package example;

public class App {
  public String getGreeting() {
    return "Hello World!";
  }

  public static void main(String[] args) throws Exception {
    System.out.println(new App().getGreeting());
  }
}
