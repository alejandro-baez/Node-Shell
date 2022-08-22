// function func() {
//   const process = require("process");

//   // The stdin 'data' event fires after a user types in a line
//   // process.stdin.on("data", (data) => {
//   //   const cmd = data.toString().trim(); //remove the newline

//   // console.log(`Current directory: ${process.cwd()}`);
//   process.stdout.write(`${process.cwd()}\n`);

//   process.stdout.write("\nprompt > ");
//   // });
// }
module.exports = function (done) {
  const process = require("process");

  done(`${process.cwd()}\n`);
};
