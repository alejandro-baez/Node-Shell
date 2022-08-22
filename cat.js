module.exports = function(fileName){
    const fs = require("fs");

    fs.readFile(fileName, 'utf8' , (error, data) => {
        if (error) {
          console.error(error)
          return
        }
      
        console.log(data)
      })
}