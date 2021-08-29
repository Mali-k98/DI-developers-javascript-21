





const exp = require('express')
const app = exp()
// const fs = require('fs')


const {Client}= require('pg')
const client = new Client({
    user:"postgres",
    password:54321,
    host:"localhost",
    port:5432,
    database:"movienight"
})
client.connect()
.then(()=> console.log('connected'))
.then(()=> client.query('select * from hp'))
.then(results => console.table(results.rows))
.catch(e=> console.log(e))
.finally(()=> client.end())

app.get('/',(req,res)=>{
    res.render('index.html')
})

app.listen(3000)