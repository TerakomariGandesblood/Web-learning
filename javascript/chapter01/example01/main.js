// 每个浏览器标签页就是其自身用来运行代码的独立容器（这些容器用专业术语称为“运行环境”）。
// 大多数情况下，每个标签页中的代码完全独立运行，而且一个标签页中的代码不能直接影响另一个标签页（或者另一个网站）中的代码

function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "你点击了这个按钮！";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
