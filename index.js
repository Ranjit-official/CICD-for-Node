const http = require("http")
const express = require("express")
const PORT = 9010
const IP = '127.0.0.1'

const app = express()
app.get("/",(req,res,next)=>{
    res.send("this is my ten try")
})

const server = http.createServer(app)

server.listen(PORT,IP,(err)=>{
    if(!err){
        console.log("Running without error")
    }
})