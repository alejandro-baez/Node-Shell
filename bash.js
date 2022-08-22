const pwd = require("./pwd");
const ls = require("./ls");
const cat = require ("./cat");

const done = (output) =>{
  process.stdout.write(output);
  process.stdout.write("prompt > ");
}


process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cmdArray = cmd.split(" ");
  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if(cmdArray[0].toString() === "cat"){
    cat(`./${cmdArray[1].toString()}`);
  }
  
});


