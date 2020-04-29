const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const deleteFile=()=>{
rl.question("What is your file name ? ", function(name) {
			fs.unlink(`${name}.txt`, function (err) {
			  if (err) throw err;
			  console.log('File deleted!');
			});
        rl.close();
});
return true;
};

module.exports = deleteFile;