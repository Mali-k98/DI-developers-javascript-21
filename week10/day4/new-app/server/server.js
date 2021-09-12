const exp = require('express')
const bp = require('body-parser')
const cors = require('cors')
const env = require('dotenv')
const register = require('./register')
const { sign } = require('jsonwebtoken')

const app = exp()
env.config()

app.use(cors)
app.use(bp.json())

app.post('/signin', (req,res)=>{sign.handleSigni(req,res)})
app.post('/register',(req,res)=>{
register.handleRegister(req,res)
})

app.listen(process.env.PORT,()=>{
    console.log('listenong on port' + process.env.PORT);
})