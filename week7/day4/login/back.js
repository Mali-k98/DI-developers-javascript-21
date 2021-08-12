const exp = require('express')
const app = exp()
const bc = require('bcrypt')
const passport = require('passport')
const initial = require('./passport-config')
const flash = require('express-flash')


initial(passport)

const initializeP = require('./passport-config')
const flash = require('express-flash')
const { session } = require('passport')
initializeP(passport,email =>{
    users.find(user => { user.email === email})})


const users=[]

app.set('view-engine', 'ejs')
app.use(exp.urlencoded({extended: false}))
app.use(flash)
app.use(session({
    secret: process.env.SESSION_SECRET
}))

app.get('/', function(req,res){
    res.render('i.ejs')
})
app.get('/register', function(req,res){
    res.render('r.ejs')
})
app.post('/register', async (req,res)=> {
    try{
    const hashedPassword= await bc.hash(req.body.pass,10)
    users.push({
        id: data.now().toString(),
        name: req.body.fn,
        email: req.body.email,
        password: hashedPassword
    })
    res.redirect('/login')
}catch{
    res.redirect('/register')
}
console.log(users);
})
app.get('/login', function(req,res){
    res.render('l.ejs')
})
app.post('/login', function(req,res){
})

// console.log('hi');
app.listen(3000)