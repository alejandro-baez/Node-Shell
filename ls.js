// function func2() {
//   const fs = require("fs");

//   // process.stdout.write("prompt > ");

//   // The stdin 'data' event fires after a user types in a line

//   // if (cmd === "ls") {
//   fs.readdir("./", "utf8", (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join("\n"));
//       process.stdout.write("prompt > ");
//     }
//   });
// }
// });
// }
module.exports = (done) =>{
  const fs = require("fs");
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join("\n"))
    }
  });
}


