const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('./modules/db').db
const secret = 'thisisasecret!!'


const handleSignin=(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(404).json('incorrect')
    }
    db('login')
    .select('email','password')
    .where({email})
    .then(data=>{
        const valid = bcrypt.compareSync(password,data[0].hash)
        if(valid){
            return db.select('*').from('users')
            .where({email})
            .then(user=>{
                const payload ={email}
                const token = jwt.sign(payload,secret,{
                    expiresIn : '1hr'
                })
                console.log('token',token);
                res.status(200).json({user:user[0],token:token})
            })
            .catch(e=>{
                console.log(e);
                res.status(404).json('unable to get user')
            })
        }else{
            res.status(404).json('wrong password')
        }
    })
    .catch(e=>{
        res.status(404).json('wrong credentials')
        console.log(e);
    })
}

module.exports={
    handleSignin
}