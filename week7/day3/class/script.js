const fs = require('fs')
const { loadavg } = require('os')

fs.readFile('./text.txt',(err,data)=>{
if(err){
    console.log(err)
}else{
    console.log(data.toString())
}
})

console.log('after reading file')


const data = fs.readFileSync('./text.txt')
console.log(data.toString())

//append to file
// let text = 'jskbaknf';
// fs.appendFile('./text.txt',text,(err)=>{
//     if(err){
//     console.log(err)
//     }
// })

let obj = {
    username: 'dan',
    password: '12345'
}
//create files
// fs.writeFile('./users',JSON.stringify(obj),(err)=>{
//     if(err){
//         console.log(err);
//     }
// }
// )

//delete file
// fs.unlink('./text.txt',text,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

//copy file
fs.copyFile('./users','./users2', err=>{
    if(err){
        console.log(err);
    }
})