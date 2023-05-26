const child_process = require("child_process");

const script = `pkg ./src/convert.js -d -t node16-win-x64 -o dist/convert.exe`;

const build = child_process.exec(script, (error, stdout, stderr) => {
  if (error) return console.error(`exec error: ${error}`);
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
