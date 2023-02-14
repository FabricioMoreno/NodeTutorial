const {readFile} = require("fs").promises
const path = require("path")

const start = async()=>{
    const firstPath=path.resolve(__dirname,"..","data","first.txt")
    const text1 = await readFile(firstPath,"utf8") 

    console.log(text1)
}
start()
console.log("first log")