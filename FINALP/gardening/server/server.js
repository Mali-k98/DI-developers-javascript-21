let exp = require('express')
let cors = require('cors')
let app = exp()

app.use(cors())

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
    console.log('hi');
    db
    .select('*').from('plants')
    .then(data=>res.send(data))
    .catch(e=>{
        console.log(e)
        res.send({
            error:e
        })
    })
    // res.send({message:'ok'})
})

app.listen(4000)