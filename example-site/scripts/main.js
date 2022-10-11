// JavaScript 为网站提供动态交互特性

// === -> 相等
// !== -> 不相等

// 文档对象模型 (DOM)
// see https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction
let image = document.querySelector("img");
image.onclick = function () {
  let image_src = image.getAttribute("src");
  if (image_src === "images/firefox-icon.png") {
    image.setAttribute("src", "images/firefox2.png");
  } else {
    image.setAttribute("src", "images/firefox-icon.png");
  }
};

let h1 = document.querySelector("h1");

function setUserName() {
  let name = prompt("请输入你的名字");
  // null 或者空
  // 取消提示对话框后值将设置为 null，这是 JavaScript 中的一个特殊值，表示引用不存在
  if (!name) {
    setUserName();
  }

  // Web Storage API
  // see https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API
  localStorage.setItem("name", name);
  h1.textContent = "Mozilla 酷毙了，" + name;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let name = localStorage.getItem("name");
  h1.textContent = "Mozilla 酷毙了，" + name;
}

// 事件
// 匿名函数
document.querySelector("button").onclick = function () {
  setUserName();
};

// 箭头函数
// document.querySelector("button").onclick = () => {
//   setUserName();
// };
