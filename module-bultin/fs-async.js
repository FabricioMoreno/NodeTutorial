const path = require("path")
const {readFile,writeFile} = require("fs")

const firstPath=path.resolve(__dirname,"..","data","first.txt")
const secondPath = path.resolve(__dirname,"..","data","second.txt")

const resultPath = path.resolve(__dirname,"..","data","result.txt")

readFile(firstPath,"utf8",(err,result)=>{
    if(err){
        return
    }
    const first = result

    readFile(secondPath,"utf8",(err,result)=>{
        if(err){
            return
        }
        const second = result

        writeFile(resultPath,"Esto es asincrono bb",(err,result)=>{
            if(err){
                return
            }
            console.log(result)
        })
    })
})

