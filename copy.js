const fs = require("fs");
const path = require("path");
const process = require("process");
const fse = require("fs-extra");

// 获取源文件
const sourceFile = path.join(process.cwd(), ".env");

// 获取目标文件
const targetFile = path.join(process.cwd(), "./dist/.env");

copyFile();

/**
 * 复制文件
 */
function copyFile() {
  fs.copyFile(sourceFile, targetFile, (err) => {
    if (err) return console.error(err);
    console.log("./dist/.env This file is copied successfully!");
  });
}

// 获取源文件夹
const sourceFolder = path.join(process.cwd(), "./assets");

// 获取目标文件夹
const targetFolder = path.join(process.cwd(), "./dist/assets");

copyFolder();

/**
 * 复制文件夹
 */
function copyFolder() {
  fse.copy(sourceFolder, targetFolder, (err) => {
    if (err) return console.error(err);
    console.log("./dist/assets This folder is copied successfully!");
  });
}
