//1
const ln = require('./main.js');

const x = ln.largeNum
const y= 5;
    
let sum = x+y
console.log(x + y)


//2
const http = require('http');


const server = http.createServer (function(req,res) => {
    console.log(req.url)
    res.setHeader('content-type','text/html')
    res.end(res.end('Number is: ' + sum + '<br><h3>Hi there at the frontend!</h3>');)
})
server.listen(3000)

//3 
const date = require('./main')

const n = date.ts

const http2 = require('http')

const server2 = http2.createServer (function (req,res) => 
{
    res.send(`the current date is :${n}`)
    res.end('great')
})
server2.listen(8080)