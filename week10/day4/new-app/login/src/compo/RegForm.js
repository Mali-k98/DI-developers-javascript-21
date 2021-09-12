import React from 'react'
import {Link} from 'react-router-dom'

class RegForm extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            name:''
        }
    }
    
    onNameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    onEmailChange=(e)=>{
        this.setState({email:e.target.value})
    }
    onPassChange=(e)=>{
        this.setState({password:e.target.value})
    }
    onSub=()=>{
        fetch('http://localhost:4000/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name
            })
        })
        .then(res=> res.json())
        .then(user=>{
            console.log(user);
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    render(){
    return (
        <div>
            <div>
                <label htmlFor='name'>name</label>
                <input type='text' name='name' onChange={this.onNameChange}/>
            </div>
            <div>  
                <label htmlFor='email'>email</label>
                <input type='email' name='email' onChange={this.onEmailChange}/>
            </div> 
            <div>  
                <label htmlFor='password'>password</label>
                <input type='password' name='password' onChange={this.onPassChange}/>
            </div> 
            <div>
                <input type='submit' onSubmit={this.onSub}/>
            </div>
        </div>
    )
    }
}

export default RegForm
