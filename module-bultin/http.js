const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("<h1>Titulo</h1>")
    res.end()
})

server.listen(5000,()=>{ 
    console.log("Listening on port 5000")

})