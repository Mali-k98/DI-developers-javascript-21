import React from 'react';
import './App.css';

const isToggleOn=true;


class App extends React.Component  {
    constructor(){
        super();
        this.state={
        light:'on',
        username:'',
        age: null
        }
    }
    
    HandleClick = ()=>{
        alert('i was clicked')
    }

    HandleKeyPress=(enter)=>{
        if(enter.keyCode == 13){
    alert(`you pressed the enter key your input is: ${enter.target.value}`)
        }
    }
    
    SwitchLight=()=>{
    // isToggleOn = false;
    // if (isToggleOn = false){
        this.setState({light:'off'})
    // }
    }
    
    GetUser=(e)=>{
        this.setState({username: e.target.value})
    }
    GetUserAge=(e)=>{
        this.setState({age: e.target.value})
    }
    HandleSub=()=>{
    if(this.state.age == NaN){
        alert('age must be a number')
    }else{
        alert(`you sumbitted: ${this.state.username} age: ${this.state.age}`)
        
    }
    }
    
    render(){
    return (
        <div className="App">
        <header className="App-header">
            <button onClick={this.HandleClick}>Click</button>
            <input onKeyPress={this.HandleKeyPress} placeholder='press ENTER!'/>
            <button onClick={this.SwitchLight}>{this.state.light}</button>
            <form>
                enter your name:
                <input type='text' onKeyUp={this.GetUser}/>
                enter your age:
                <input type='text' onKeyUp={this.GetUserAge}/>
                <button onClick={this.HandleSub}>submit</button>
                <h1>hello {this.state.username} {this.state.age}</h1>
            </form>
        </header>
        </div>
    );
    }
}

export default App;