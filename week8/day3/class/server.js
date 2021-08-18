const exp = require('express')
const app = exp()
const cors = require('cors')
app.use(cors)

const knex = require('knex')({
    client: 'mysql',
    version: '5.7',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'puppies8991',
        database : 'countries'
    }
})

app.get('/countries', function(req,res){
    knex.select('*').from('countries').where('capital')
    .then(data=>console.log(data))
})
app.get('/countries', function(req,res){
    knex.select('*').from('countries').where('country')
    .then(data=>console.log(data))
})
app.listen(8080)