const fs = require('fs/promises');
const index = require("./index");
const { error } = require('console');
const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent,(error)=>{
		console.log(error)
		
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName,(error,data)=>{
		if(error){
			console.log(error)

		}else{
			console.log(data)
		}
	})

}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(error)=>{
		console.log(error)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName ,(error)=>{
		console.log(error)
	})
}


module.exports = { myFileWriter,myFileReader,myFileUpdater ,myFileDeleter}