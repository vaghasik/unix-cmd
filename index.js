const fs = require('fs');
const readline = require("readline");
let   createFun = require("./create.js");
let   deleteFun = require("./delete.js");
let   renameFun = require("./rename.js");
let   makeFun = require("./makdir.js");
let   readFun = require("./read.js");
let   replaceFun = require("./replace.js");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function GetStart(){
	let status = "";
	rl.question("Process name? ", function(name) {
		if(name === "create"){
			createFun()
		}else if(name === "delete"){
			deleteFun()
		}else if(name === "rename"){
			renameFun();
		}else if(name === "make"){
			status = makeFun();
			if(status){
				console.log('Directory created successfully!'); 
				GetStart();
			}
		}else if(name === "read"){
			status = readFun();
			if(status){
				GetStart();
			}
		}else if(name === "replace"){
			status = replaceFun();
			if(status){
				GetStart();
			}
		}
	});		
}
GetStart();
module.exports = GetStart;

