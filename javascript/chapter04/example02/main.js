// fetch() API，一个现代的、基于 Promise 的、用于替代 XMLHttpRequest 的方法
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// Promise 有三种状态：
// 待定（pending，初始状态，操作还在进行中）
// 已兑现（fulfilled，操作成功完成，then() 处理函数被调用）
// 已拒绝（rejected，操作失败，catch() 处理函数被调用）
console.log(fetchPromise);

// 当获取操作成功时，Promise 将调用处理函数，传入一个包含服务器的响应的 Response 对象
fetchPromise
  .then((response) => {
    // 服务器返回一个错误（如 404 Not Found）时请求成功
    if (!response.ok) {
      throw new Error(`HTTP 请求错误: ${response.status}`);
    }

    return response.json();
  })
  .then((json) => {
    console.log(json[0].name);
  })
  // Promise 链
  // 如果将 catch() 添加到 Promise 链的末尾，它就可以在任何异步函数失败时被调用
  .catch((error) => {
    console.error(`无法获取产品列表: ${error}`);
  });

console.log("已发送请求……");

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

// 合并使用多个 Promise
// 任何一个 Promise 被拒绝，catch() 处理函数被调用
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`获取失败：${error}`);
  });

// 任何一个 Promise 被兑现，then() 处理函数被调用
Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`获取失败：${error}`);
  });

// 异步函数
// 异步函数总是返回一个 Promise
// 在异步函数中，你可以在调用一个返回 Promise 的函数之前使用 await 关键字。
// 这使得代码在该点上等待，直到 Promise 被完成，这时 Promise 的响应被当作返回值，或者被拒绝的响应被作为错误抛出
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }

    const json = await response.json();
    console.log(json[0].name);
  } catch (error) {
    console.error(`无法获取产品列表：${error}`);
  }
}

fetchProducts();
