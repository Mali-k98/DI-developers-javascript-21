let exp = require('express')
let app = exp()

const knex= require('knex')
const db = knex({
    client:'pg',
    connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: 'puppies8991',
    database: 'plant-index'
}
})

app.get('/plants',(req,res)=>{
    db
    .select('*').from('plants')
    .then(data=>res.send(data))
})



app.listen(4000)