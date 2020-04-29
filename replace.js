var fs = require('fs')
const replaceFun=()=>{
	fs.readFile('documents.txt', 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	  var result = data.replace(/Hi/g, 'Hello');

	  fs.writeFile('documents.txt', result, 'utf8', function (err) {
		 if (err) return console.log(err);
	  });
	});
	return true;
}
module.exports = replaceFun;