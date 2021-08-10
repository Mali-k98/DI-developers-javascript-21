//--1--
let exp = require('express')
let app = express();

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

app.get('/',(req,res)=>{
    fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => {
    console.log(data);
    })
})
app.listen(3000)

//--2--
app.get('/index/profile/:id',function(req,res){

    })
app.listen(3000)
