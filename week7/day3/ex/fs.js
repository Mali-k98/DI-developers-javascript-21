const fs = require('fs')
//1
fs.writeFile('text.txt','example text', err =>{
    if(err){
        console.log(err)
    }
})

fs.read('./text.txt',(err,data =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
}))
//2
fs.appendFile('./text.txt','some more text',err=>{
    if(err){
        console.log(err);
    }
})

fs.unlink('./text.txt',(err)=>{
    if(err){
        console.log(err);
    }
})