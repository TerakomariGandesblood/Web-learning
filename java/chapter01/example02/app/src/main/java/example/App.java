
package example;

import java.text.MessageFormat;
import java.util.Random;

public class App {
  public String getGreeting() {
    return "Hello World!";
  }

  class Letter {
    int c;
  }

  void func(Letter letter) {
    letter.c = 0;
  }

  @SuppressWarnings("deprecation")
  public static void main(String[] args) throws Exception {
    App app = new App();

    // 几乎所有的操作符都只能操作基本类型
    // =、== 和 !=，它们也能操作对象
    Integer a = new Integer(42);
    Integer b = new Integer(42);
    // false，比较的是对象的引用
    System.out.println(a == b);
    // true，注意默认的 equals() 方法比较的也是引用，想改变需要重写
    System.out.println(a.equals(b));

    String s = "asdf";
    // String类也支持 + 和 +=
    // 会尝试将非 String 转换为 String
    s += 42;
    System.out.println(s);

    Letter letter = app.new Letter();
    letter.c = 42;
    app.func(letter);
    // 0
    System.out.println(letter.c);

    // 默认有种子
    Random random = new Random();
    System.out.println(random.nextInt(100));

    // 必须是 boolean 类型
    // error System.out.println(1 && 2);

    // 0x2F 0177 0B010101 1L 1.0F 1.0D 100_100 2.3E23F

    System.out.println(Integer.toBinaryString(7));

    // 根据程序运行的平台生成合适的换行符
    // 仅会在使用 System.out.printf() 或 System.out.format() 时起作用
    // 双引号里的字符序列会自动转换为 String
    System.out.printf("%n" + 2 + "%n");

    long i = 10;
    // 窄化转型（narrowing conversion），必须进行强制类型转换
    // Java 可以把任何基本类型转换成别的基本类型，但 boolean 除外，它不允许进行任何类型的转换处理
    int j = (int) i;

    // 对小于int类型的基本数据类型执行算术运算或按位运算，运算执行前这些值就会被自动提升为int
  }
}
