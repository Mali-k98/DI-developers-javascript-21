const knex = require('knex')

const db = knex({
    client: '',
    connection:{
        host:'',
        port:'',
        user:'',
        password:'',
        database:''
        }
})

db.select('movie_id','movie').from('movie')
.then(data =>{
    console.log(data);
})