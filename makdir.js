const fs = require('fs'); 
const path = require('path'); 

const makDir = ()=>{  
	fs.mkdir(path.join(__dirname, 'test'), (err) => { 
		if (err) { 
			return console.error(err); 
		} 
	}); 
	return true;
}
module.exports = makDir;