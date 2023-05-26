const fs = require("fs");
const http = require("http");
const path = require("path");
const process = require("process");
const script = require("./script.js");
const child_process = require("child_process");

const server = http.createServer((req, res) => {
  const filePath = path.join(path.join(process.cwd(), "live.html"));
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(8528, async () => {
  const node_env = process.env.NODE_ENV;

  const filePath = node_env === "development" ? "./src/assets" : "./assets";

  const ffmpegPath = path.join(process.cwd(), filePath);

  console.log("execute script:", script);

  // 执行 命令
  const ffmpeg = await child_process.exec(
    script,
    { cwd: ffmpegPath },
    (error, stdout, stderr) => {
      if (error) return console.error(`exec error: ${error}`);
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  console.log("Server listening on port http://127.0.0.1:8528");
});
