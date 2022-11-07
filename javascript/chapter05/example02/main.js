// window 表示一个包含 DOM 文档的窗口，其 document 属性指向窗口中载入的 DOM 文档
console.log(window.innerWidth);
console.log(window.innerHeight);

// navigator 表示浏览器存在于 web 上的状态和标识（即用户代理）
console.log(navigator.userAgent);

// document（在浏览器中用 DOM 表示）是载入窗口的实际页面
console.log(document.body.innerText);

// 会匹配在文档中遇到的第一个 <a> 元素
let link = document.querySelector("a");
// 所有元素
// let links = document.querySelectorAll("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

let section = document.querySelector("section");
let para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
section.appendChild(para);

let text = document.createTextNode(
  " — the premier source for web development knowledge.",
);
para = document.querySelector("p");
para.appendChild(text);

section.appendChild(text);
section.removeChild(text);

console.log(document.styleSheets);

para.setAttribute("class", "highlight");
