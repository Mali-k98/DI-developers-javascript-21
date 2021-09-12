import React from 'react'
import {Link} from 'react-router-dom'

class Singin extends React.Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    onEmailChange =(e)=>{
        this.setState({email: e.target.value})
    }
    onPassChange =(e)=>{
        this.setState({password: e.target.value})
    }
    onSub=()=>{
        fetch('http://localhost:4000/signin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(res=> res.json())
        .then(userdata=>{
            console.log(userdata);
            this.props.loadUser(userdata)
            this.props
        })
    }
    
    render(){
    return (
        <div>
            <div>
                <label htmlFor='email'>email</label>
                <input type='email' name='email' onChange={this.onEmailChange}/>
            </div> 
            <div>  
                <label htmlFor='password'>password</label>
                <input type='password' name='password' onChange={this.onPassChange}/>
            </div> 
            <div>
                <button onClick={this.onSub}>Login</button>
            </div>
        </div>
    )
    }
}

export default Singin
