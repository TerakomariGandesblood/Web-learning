// 创建一个新的 Worker，它能够在单独执行线程中运行一些任务
// Workers 和主代码运行在完全分离的环境中，只有通过相互发送消息来进行交互，Workers 不能访问 DOM
// 这个是 Dedicated Worker
// NOTE 还有其他类型的 Worker：Shared Worker、Service worker
const worker = new Worker("./generate.js");

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota: quota,
  });
});

worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  // 刷新当前页面
  document.location.reload();
});
