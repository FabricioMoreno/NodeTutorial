const path =  require("path")

console.log(path.sep)

console.log(path.join("content","file","index.txt"))

const pathFile = path.join("content","file","index.txt")

console.log(path.basename(pathFile))

console.log(path.resolve(__dirname,"sdf","sdfasd.txt"))

//Diferncee between join and resolve
console.log("Join")
console.log(path.join("a","b","c"))
console.log(path.join("/a","b","c"))
console.log(path.join("/a","/b","c"))
console.log(path.join("/a","/b","/c"))

console.log("Resolve")
console.log(path.resolve("a","b","c"))
console.log(path.resolve("/a","b","c"))
console.log(path.resolve("/a","/b","c"))
console.log(path.resolve("/a","/b","/c"))

//The last param whose / will be root directory