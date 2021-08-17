import Vote from "./Vote";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';

export const Increment=()=>{
    this.setState({counter:this.state + 1})
}



class App4 extends React.Component {
    constructor(){
        super()
        this.state={
            languages : [
                {nam: "manchester city", votes: 0},
                {nam: "chealse", votes: 0},
                {nam: "Liverpool", votes: 0},
                {nam: "manchester united", votes: 0}
            ]
        }
        }
        render(){
    return (
        <div className="App">
            <h1>who will win the prem</h1>
            <Vote Increment={Increment}/>
        </div>
    );
    }
}

export default App4;
