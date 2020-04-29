const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const createFile=()=>{
rl.question("What is your file name ? ", function(name) {
    rl.question("Enter your content ? ", function(content) {
        //console.log(`${name}, is a citizen of ${country}`);
			fs.appendFile(`${name}.txt`, content, function (err) {
			  if (err) throw err;
			  console.log('Saved!');
			  
			});
        rl.close();
    });
});
return true;
};

module.exports = createFile;
//createFile();

