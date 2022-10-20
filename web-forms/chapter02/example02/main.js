const form = document.querySelector("form");
const result = document.querySelector("p");

function sendData(data) {
  const url = "https://httpbin.org/post";
  fetch(url, {
    method: "post",
    body: new FormData(form),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      result.textContent = JSON.stringify(json["form"]);
    })
    .catch((error) => {
      alert(`登陆失败: ${error}`);
    });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
