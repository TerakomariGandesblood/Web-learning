
package example;

// 所有的 Java 代码文件都默认导入了java.lang
// 其他的需要导入（也可以直接写全称）
import java.util.Date;

// 文件中必须存在一个与该文件同名的类
public class App {
  public String getGreeting() {
    return "Hello World!";
  }
  // 入口方法
  public static void main(String[] args) throws Exception {
    // 引用的作用是关联对象，使用 new 关键字来创建对象
    // String s = new String("asdf");
    // String 可以用带引号的文本进行初始化
    String s = "asdf";
    System.out.println(s);

    // 对于基本类型来说，c 不是引用，会在栈上保存
    // char 是 16 位，boolean 类型大小没有明确标出
    // 不存在无符号类型
    char c = 'c';
    // 基本类型有对应的包装类（wrapper class）
    Character cc = Character.valueOf(c);
    // 自动装箱（autoboxing）机制能够将基本类型对象自动转换为包装类对象
    cc = c;
    // 自动拆箱
    c = cc;
    System.out.println(cc);

    // 基本类型作为类的字段时会拥有默认值，为 0 / 0.0 / false 等
    DataOnly dataOnly = new DataOnly();
    System.out.println(dataOnly.d);

    // 这样不会有默认值，但是不能使用
    // int x;
    // error
    // System.out.println(x);

    System.out.println(DataOnly.get_static());

    System.out.println(new Date());
  }
}

class DataOnly {
  double d;
  static int i = 42;

  static int get_static() {
    return i;
  }
}
