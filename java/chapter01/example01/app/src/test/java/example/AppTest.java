
package example;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

class AppTest {
  @Test
  void test() {
    App classUnderTest = new App();
    assertNotNull(classUnderTest.get_Greeting(), "app should have a greeting");
  }
}
