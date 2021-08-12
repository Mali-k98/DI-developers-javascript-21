let exp = require('express')
let app = exp()
let fs = require('fs')
const front = require('./front')

// app.use('/',exp.static(__dirname + '/public'))

app.get('/', function(req,res){
    res.sendFile(__dirname+'/s.html')
})

app.listen(3000)

let f = fs.readFile(front,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    return data
})

fs.writeFile('./list.txt',f,(err)=>{
    if(err){
        console.log(err);
    }
})