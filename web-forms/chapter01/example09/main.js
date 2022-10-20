const form = document.querySelector(".validate");
const email = document.querySelector(".validate #mail");
const error = document.querySelector(".validate .error");

email.addEventListener("input", () => {
  // 当用户输入信息时，校验 email 字段
  if (email.validity.valid) {
    error.innerHTML = "";
    error.className = "error";
  }
});

form.addEventListener("submit", (event) => {
  // 当用户提交表单时，校验 email 字段
  if (!email.validity.valid) {
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // 阻止表单提交
    event.preventDefault();
  }
});
