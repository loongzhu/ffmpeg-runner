const fs = require("fs");
const path = require("path");
const process = require("process");
const script = require("./script.js");
const child_process = require("child_process");

// 获取 ffmpeg 路径
const ffmpegPath = path.join(process.cwd(), "/assets");

// 执行 命令
const ffmpeg = child_process.exec(
  script,
  { cwd: ffmpegPath },
  (error, stdout, stderr) => {
    if (error) return console.error(`exec error: ${error}`);
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
);
