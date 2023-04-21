const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const process = require("process");
const child_process = require("child_process");

const config = dotenv.config({ path: ".env.build" });

const EXENAME = process.env.BASE_EXENAME;

// 创建 dist 下的 ffmpeg-start.vbs 文件 和 ffmpeg-stop.vbs 文件

const startVbs = `Set WshShell = CreateObject("WScript.Shell")
cmds = WshShell.Run("${EXENAME}.exe", 0)
Set WshShell = Nothing`;

fs.writeFileSync(
  path.join(process.cwd(), "dist", `${EXENAME}-start.vbs`),
  startVbs
);

const stopVbs = `Set objWMIService = GetObject("winmgmts:\\\\.\\root\\cimv2")
Set objShell = CreateObject("WScript.Shell")
Set colProcessList = objWMIService.ExecQuery("SELECT * FROM Win32_Process WHERE Name = '${EXENAME}.exe'")

For Each objProcess in colProcessList
    objProcess.Terminate()
Next`;

fs.writeFileSync(
  path.join(process.cwd(), "dist", `${EXENAME}-stop.vbs`),
  stopVbs
);

// 创建 dist 下的 ffmpeg-start.bat 文件 和 ffmpeg-stop.bat 文件

const startBat = `@echo off
taskkill /F /IM ${EXENAME}.exe`;

fs.writeFileSync(
  path.join(process.cwd(), "dist", `${EXENAME}-start.bat`),
  startBat
);

const stopBat = `@echo off
start /B "" "%COMSPEC%" /c start /B "" "${EXENAME}.exe"
exit`;

fs.writeFileSync(
  path.join(process.cwd(), "dist", `${EXENAME}-stop.bat`),
  stopBat
);

const script = `pkg main.js -d -t node16-win-x64 -o dist/${EXENAME}.exe`;

const build = child_process.exec(script, (error, stdout, stderr) => {
  if (error) return console.error(`exec error: ${error}`);
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
