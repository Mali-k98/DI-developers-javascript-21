const passport = require('passport')
const { initialize } = require('passport')
const ls = require('passport-local')


function initial(passport,getUserByEmail){
    const authenticateUser =()=>{
    const user = getUserByEmail(email)
    if(user === null){
        return done(null,false,{message:'no user with that email'})
    }
    try{
        if(await bcrypt.compare (password,user.password)){
            return done (null,user)
        }else{
            return done (null,false,{message:'password incorrect'})
        }
    }
    catch{
        return done(e)
    }
    }
    passport.use(new ls({username:'un'}), authenticateUser),
    passport.serial((user,done)=> { })
    passport.deserial((id,done)=> { })
}

module.exports = initial