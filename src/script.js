const dotenv = require("dotenv");
const process = require("process");

const config = dotenv.config();

const IP = process.env.BASE_IP;
const PORT = process.env.BASE_PROT;
const NAME = process.env.BSAE_NAME;

// https://blog.csdn.net/weixin_42081389/article/details/100543007

// const script = `ffmpeg -f gdigrab -i desktop -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -f rtsp rtsp://${IP}:${PORT}/${NAME}`;
// ffmpeg -f gdigrab -r 30 -i desktop screen.avi  录制屏幕
// ffmpeg -i screen.avi -c copy -map 0 video.mp4  avi 转 mp4

const script = `ffmpeg -f gdigrab -i desktop -pix_fmt yuv420p -c:v libx264 -preset ultrafast -b:v 600k -c:a aac -b:a 160k -f rtsp rtsp://${IP}:${PORT}/${NAME}`;

module.exports = script;
