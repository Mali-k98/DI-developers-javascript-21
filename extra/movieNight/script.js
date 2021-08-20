const cors =require('cors')
const exp = require('express')
const app = exp()
app.use(cors())
// const fs = require('fs')

const knex= require('knex')
const db = knex({
    client:'pg',
    connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: 'puppies8991',
    database: 'movienight'
}
})

// console.log('hello')

app.get('/hp',(req,res )=>{
    console.log('hi')
    db
    .select('*').from('hp')
    // .then(data=> console.log(data))
    .then(data=>res.send(data))

})
app.get('/disney',(req,res)=>{
    db
    .select('*').from('disney')
    // .then(data=> console.log(data))
    .then(data=>res.send(data))
})
app.get('/pixar',(req,res)=>{
    db
    .select('*').from('pixar')
    // .then(data=> console.log(data))
    .then(data=>res.send(data))
})


app.listen(3000)
