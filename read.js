var fs = require('fs');
const readFun=()=>{
	fs.readFile('documents.txt', function(err, data) {
		console.log(data.toString());
	});
		return true;
}
module.exports = readFun;