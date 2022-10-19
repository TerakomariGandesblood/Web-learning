// Asynchronous JavaScript and XML（Ajax）
// Ajax 模型包括使用 Web API 作为代理来更智能地请求数据，而不仅仅是让浏览器重新加载整个页面

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  const url = `${verse}.txt`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // 获取响应主体中的原始数据并把它转换成纯文本
      return response.text();
    })
    .then((text) => {
      poemDisplay.textContent = text;
    })
    .catch((error) => {
      poemDisplay.textContent = `Could not fetch verse: ${error}`;
    });
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
