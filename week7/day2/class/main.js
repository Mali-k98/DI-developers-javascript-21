// import exp from 'express'
const exp = require('express');
const users = require('./modules/users');

const bp = require(body-parser)

const app = exp();

app.use(bp.urlenconded({extended:false}))

app.use(bp.json)


app.use('/',exp.static(__dirname + '/public'))

// app.get('/a',(req,res) => {
//     res.write('<h1>hello</h1>')
//     res.write('<h2>hiya</h2>')
//     res.end();
// })

// app.post('/a',(req,res) =>{

// })

// app.get('/b',(req,res) => {
//     res.send('hello b')
// })

app.route('login')
.get((res,req)=>{

})
.post((req,res) =>{
    res.send
    {
        user:user,
        passpass
    }
})

app.get('/login',(req,res) => {
    const {user,pass} =req.query
    res.send(`<h1>hello ${user}</h1>`)
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    const {user,pass} = req.body
    res.send(`<h1>this is ${user} ${pass}</h1>`)
})


// let ur = require('./modules/users')
// app.use(ur())
app.get('/robots',(req,res)=>{
    
    users.users()
    .then(data =>{
        res.send(data)
    })
    .catch(e=>{
        res.send({message:e.message})
    })
})

function getRobo(){
    fetch('http://localhost:3000?robots')
    .then(res= res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e=>{
        console.log(e)
    })
}
getRobo()


app.listen(3000)