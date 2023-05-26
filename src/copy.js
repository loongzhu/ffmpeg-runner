const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const process = require("process");

const sourceENV = path.join(process.cwd(), ".env");
const targetENV = path.join(process.cwd(), "./dist/.env");
copyFile(sourceENV, targetENV, "./dist/.env");

const sourceHtml = path.join(process.cwd(), "./src/live.html");
const targetHtml = path.join(process.cwd(), "./dist/live.html");
copyFile(sourceHtml, targetHtml, "./dist/live.html");

const sourceFolder = path.join(process.cwd(), "./src/assets");
const targetFolder = path.join(process.cwd(), "./dist/assets");
copyFolder(sourceFolder, targetFolder, "./dist/assets");

/**
 * 复制文件
 * @param {*} source 源文件
 * @param {*} target 目标文件
 * @param {*} name 目标文件名
 */
function copyFile(source, target, name) {
  fs.copyFile(source, target, (err) => {
    if (err) return console.error(err);
    console.log(`${name} This file is copied successfully!`);
  });
}

/**
 * 复制文件夹
 * @param {*} source 源文件夹
 * @param {*} target 目标文件夹
 * @param {*} name 目标文件夹名
 */
function copyFolder(source, target, name) {
  fse.copy(source, target, (err) => {
    if (err) return console.error(err);
    console.log(`${name} This folder is copied successfully!`);
  });
}
