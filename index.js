const http = require("http")
const PORT = 9010
const IP = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.end("hello World")
})

server.listen(PORT,IP,(err)=>{
    if(!err){
        console.log("Running without error")
    }
})