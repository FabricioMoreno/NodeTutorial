const path = require("path")
const {readFileSync,writeFileSync} = require("fs")

const firstPath=path.resolve(__dirname,"..","data","first.txt")
const secondPath = path.resolve(__dirname,"..","data","second.txt")

const resultPath = path.resolve(__dirname,"..","data","result.txt")

const first = readFileSync(firstPath,"utf8")

const second = readFileSync(secondPath,"utf8")


writeFileSync(resultPath,"Esto es sincrono bb",{flag:a})