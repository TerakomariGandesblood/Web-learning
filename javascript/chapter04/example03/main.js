function alarm(person, delay) {
  // 两个参数都是函数
  // 如果抛出了一个错误，reject 会被自动调用
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

alarm("Terakomari", 1000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(`Couldn't set alarm: ${error}`);
  });
