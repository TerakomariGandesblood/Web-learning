// 可以是不同的类型
let random = ["tree", 795, [0, 1, 2]];
console.log(random[2][1]);
console.log(random.length);

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",");

console.log(myArray.join(","));
// 同上
console.log(myArray.toString());

myArray.push("Cardiff");
// 删除最后一个元素
myArray.pop();

// 删除/添加一个元素
myArray.unshift("Edinburgh");
myArray.shift();
