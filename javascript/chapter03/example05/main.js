// JavaScript 对象表示法（JSON）是用于将结构化数据表示为 JavaScript 对象的标准格式，通常用于在网站上表示和传输数据

let header = document.querySelector("header");
let section = document.querySelector("section");

let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// 请求完成时触发
request.onload = () => {
  let superHeroes = request.response;

  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(jsonObj) {
  let h1 = document.createElement("h1");
  h1.textContent = jsonObj["squadName"];
  header.appendChild(h1);

  let para = document.createElement("p");
  para.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(para);
}

function showHeroes(jsonObj) {
  let heroes = jsonObj["members"];

  for (let i = 0; i < heroes.length; i++) {
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let list = document.createElement("ul");

    h2.textContent = heroes[i].name;
    para1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    para2.textContent = "Age: " + heroes[i].age;
    para3.textContent = "Superpowers:";

    let powers = heroes[i]["powers"];
    for (let j = 0; j < powers.length; j++) {
      let list_item = document.createElement("li");
      list_item.textContent = powers[j];
      list.appendChild(list_item);
    }

    article.appendChild(h2);
    article.appendChild(para1);
    article.appendChild(para2);
    article.appendChild(para3);
    article.appendChild(list);

    section.appendChild(article);
  }
}

let json = { name: "Chris", age: "38" };
let str = JSON.stringify(json);
json = JSON.parse(str);
console.log(json);
