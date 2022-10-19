const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  let delete_button = document.createElement("button");
  delete_button.textContent = "Delete";
  li.appendChild(delete_button);

  delete_button.addEventListener("click", () => {
    list.removeChild(li);
  });

  input.focus();
});
