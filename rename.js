const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

const renameFile=()=>{
rl.question("What is your current file name ? ", function(name) {
    rl.question("Enter your New file name ? ", function(name1) {
			fs.rename(`${name}.txt`, `${name1}.txt`, function (err) {
			  if (err) throw err;
			  console.log('File renamed!');
			});
        rl.close();
    });
});
return true;
};
module.exports = renameFile;


