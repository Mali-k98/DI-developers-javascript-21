const http = require('http')
const exp = require('express')
const app = express()
// console.log('hi')


    //--1--
let server = http.createServer(function(req,res){
    res.write(`<h1>hello</h1>`)
    res.write(`<h2>hi</h2>`)
    res.write(`<h3>hiya</h3>`)
    res.end()
})

server.listen(3000)

//--2--
const user = {
    firstname: 'John',
    lastname: 'Doe'
}

let server2= http.createServer(function(req,res){
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify(user))
})
server2.listen(8080)


//--3--
app.get('/',(req,res)=>{
    res.write(`<h1>wow</h1>`)
    res.end()
})
app.listen(3000)
