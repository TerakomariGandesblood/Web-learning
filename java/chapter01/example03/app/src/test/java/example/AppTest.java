
package example;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

class AppTest {
  @Test
  void test() {
    App classUnderTest = new App(0);
    assertNotNull(classUnderTest.getGreeting(), "app should have a greeting");
  }
}
