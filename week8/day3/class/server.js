const exp = require('express')
const cors = require('cors')
const app = exp()
app.use(cors)

const knex = require('knex')
const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port: '5432',
        user : 'postgres',
        password : 'puppies8991',
        database : 'dvdrental'
    }
})

app.get('/countries', function(req,res){

    getCountry()
    // .then(r=>console.log(r))
    .then(result=>res.send(result))
    .catch(err=>res.send({message:err.message}))

})


app.get('/cities/:country_id', function(req,res){
    getCities()
    // .then(r=>console.log(r))
    .then(result=>res.send(result))
    .catch(err=>res.send({message:err.message}))
})


const getCountry = ()=>{
    return db ('country')
    .select('country',('country_id'))
    .orderBy('country')
}
const getCities=(id)=>{
    return db('city')
    .select('city','city_id')
    .where({country_id:id})
    .orderBy('city')
}

app.listen(4000)