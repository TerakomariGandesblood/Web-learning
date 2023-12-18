// 客户端存储

// NOTE 客户端存储 API 可以存储的数据量是有限的，客户端存储 API 可以存储的数据量是有限的
// 详见 https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria

// 传统方法是使用 cookie，它是过时的，有各种安全问题，现在使用
// Web Storage API：存储简单数据（键值对）
// IndexedDB API：完整的数据库系统，可以是复杂的数据类型，如音频和视频
// Cache API：存储特定 HTTP 请求的响应文件

const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", function (e) {
  // 阻止表单提交
  e.preventDefault();
});

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", nameInput.value);
  nameDisplayCheck();
});

forgetBtn.addEventListener("click", function () {
  localStorage.removeItem("name");
  nameDisplayCheck();
});

function nameDisplayCheck() {
  // localStorage 一直存在
  // sessionStorage 浏览器关闭则丢失
  // 每个域（如 google.com 和 amazon.com）都有一个单独的数据存储区
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = "Welcome, " + name;
    personalGreeting.textContent =
      "Welcome to our website, " +
      name +
      "! We hope you have fun while you are here.";
    forgetDiv.style.display = "block";
    rememberDiv.style.display = "none";
  } else {
    h1.textContent = "Welcome to our website ";
    personalGreeting.textContent =
      "Welcome to our website. We hope you have fun while you are here.";
    forgetDiv.style.display = "none";
    rememberDiv.style.display = "block";
  }
}

document.body.onload = nameDisplayCheck;
