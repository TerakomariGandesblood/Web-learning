// 事件是您在编程时系统内发生的动作或者发生的事情——系统会在事件出现时产生或触发某种信号
// 并且会提供一个自动加载某种动作（列如：运行一些代码）的机制

// 每个可用的事件都会有一个事件处理器，也就是事件触发时会运行的代码块。
// 当我们定义了一个用来回应事件被激发的代码块的时候，我们说我们注册了一个事件处理器（也叫事件监听器）

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  return rndCol;
}

const divs = document.querySelectorAll(".container div");

for (let i = 0; i < divs.length; ++i) {
  // NOTE 尽量使用这个，因为如果需要的话，可以使用 removeEventListener 删除事件处理代码，也可以注册多个事件处理器
  // 事件对象，它被自动传递给事件处理函数，以提供额外的功能和信息
  divs[i].addEventListener("click", function (e) {
    e.target.style.backgroundColor = bgChange();
  });
}

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const submit = document.getElementById("submit");
const para = document.querySelector("p");

form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
};

// 默认情况下，浏览器检查元素是否注册了一个事件处理程序，如果是，则运行它
// 然后浏览器移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，直到它到达 <html> 元素
// 使用 stopPropagation() 可以阻止这种行为

// 事件委托：这个概念依赖于这样一个事实，如果你想要在大量子元素中单击任何一个都可以运行一段代码
// 您可以将事件监听器设置在其父节点上
