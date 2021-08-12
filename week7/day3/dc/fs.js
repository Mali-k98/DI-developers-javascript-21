const fs = require('fs')

let text = fs.readFile('/right-left',(err,data)=>{
    if(err){
        console.log(err);
    }
    return data.toString();
})
let arr = text.split('\n');
let arrS= arr.sort();
let sum= arrS.reduce((a,b)=>{
    return a-b
});

console.log(sum);

