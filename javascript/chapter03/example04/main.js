// 底层是使用原型链实现
class Person {
  // 可以省略，但是建议写出
  name;
  // 可以有默认值
  // name = "";

  // 构造函数
  // 可以省略，会生成默认构造函数
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

// 使用 extends 继承
class Professor extends Person {
  // 以 # 开头，私有
  #teaches;

  constructor(name, teaches) {
    // 调用父类的构造函数
    super(name);
    this.#teaches = teaches;
  }

  // 覆盖
  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
    this.#grade();
  }

  // 私有方法
  #grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const giles = new Person("Giles");
giles.introduceSelf();

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();

// error
// console.log(walsh.#teaches);
