//引入http模块
const fs = require("fs");
const http = require("http");
const path = require("path");
const express = require("express");
const request = require("request");

// const port = 8080;
// const rtspUrl = "rtsp://10.0.4.10:8554/video";

//设置主机名
// const hostName = "127.0.0.1";
// //设置端口
// const port = 8080;
// //创建服务
// const server = http.createServer(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello nodejs");
//   // node 必须使用 ./index.js 路径写法  返回文件
//   fs.readFile("./index.html", (err, data) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     if (!err) {
//       res.end(data);
//     } else {
//       res.end("html not found");
//     }
//   });
// });
// server.listen(port, hostName, function () {
//   console.log(`服务器运行在http://${hostName}:${port}`);
// });

const app = express();

// 静态资源目录
app.use(express.static(path.join(process.cwd(), ".")));

// 监听端口
app.listen(8528, () => {
  console.log("server is running at http://127.0.0.1:8528");
});

// http
//   .createServer((req, res) => {
//     const headers = {
//       "Content-Type": "video/mp4",
//       Connection: "keep-alive",
//       Pragma: "public",
//       "Cache-Control": "public, max-age=86400",
//     };

//     req.pipe(request(rtspUrl)).pipe(res);
//   })
//   .listen(8080, () => {
//     console.log(`RTSP proxy server listening on port ${8080}`);
//   });
