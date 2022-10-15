let button = document.querySelector("button");
button.onclick = function () {
  let video = document.querySelector("video");
  video.load();
};

// NOTE 可以监控媒体元素中的音频轨道
