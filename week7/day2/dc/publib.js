let exp = require('express')
let app = exp()

app.route('./aboutme/hobby')
.get((req,res)=>{
    res.write('fishing')
    res.end()
})

app.route('./pic')
.get((req,res)=>{
    res.write('<img src=doggo.jpg>')
    res.end()
})

app.use('/',exp.static(__dirname+'/public'));

app.route('/form')
.get( (req,res)=> {
    console.log(req.query);
    const user = req.query.fn;
    console.log(user);
    const mail = req.query.mail;
    const data = {
    message: 'Welcome',
    user
    }
    console.log(data);
    res.send(data)
    res.send(mail)
})

app.listen(3000)