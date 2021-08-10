const axios = require('axios')

const getR = async ()=>{
    try{
        const res = await axios.getR('https://jsonplaceholder.typicode.com/users')
        const users = await res.data;
        return users
    }
    catch(e){
        console.log(e)
    }
}

module.exports ={
    users:getR
}