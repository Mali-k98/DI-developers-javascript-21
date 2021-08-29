import React from 'react'

class Form extends React.Component {
    constructor(){
        super();
        this.state={
            fname:'',
            lname:'',
            phone:'',
            email:''
        }
    }
    
    fName=(e)=>{this.setState({fname:e.target.value})}
    lName=(e)=>{this.setState({lname:e.target.value})}
    phoneNo=(e)=>{this.setState({phone:e.target.value})}
    eMail=(e)=>{this.setState({email:e.target.value})}
    




    render(){
    return (
        <div style={{backgroundColor:'gray'}}>
            <form>
                <h1>Welcome!</h1>

                <input onChange={this.fName} type='text' placeholder='first name'/><br></br>
                <input onChange={this.lName} type='text' placeholder='last name'/><br></br>
                <input onChange={this.phoneNo} type='text' placeholder=' phone number'/><br></br>
                <input onChange={this.eMail} type='email' placeholder='email'/><br></br>
                <button type='submit' >Submit</button>
            </form>
            <div>
                <p>{this.state.lname},{this.state.fname}</p>
                <p>{this.state.phone}|{this.state.email}</p>
            </div>
        </div>
    )
    }
}

export default Form
