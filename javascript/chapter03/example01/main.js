let obj = {};
// {}
console.log(obj);
// object
console.log(typeof obj);

let person = {
  // 属性 (property)
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  // 方法 (method)
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};

console.log(person.name[0]);
// 括号表示法 (bracket notation)
// 对象有时被称之为关联数组 (associative array)
console.log(person["name"][0]);

// 创建新 Property
person.newProperty = 42;
console.log(person.newProperty);

let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;
