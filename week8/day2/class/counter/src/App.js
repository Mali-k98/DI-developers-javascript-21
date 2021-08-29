import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      counter:0,
      txt:''
    }
    }

  plusOne = () =>{
    this.setState({counter:this.state.counter + 1})
  }
  minusOne=()=>{
    this.setState({counter:this.state.counter - 1})
  }
  reset=()=>{
  this.setState({counter:0})
  }
  printText =(event)=>{
    this.setState({txt:event.target.value})
  }

  render(){
    const {counter,txt} = this.state
  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick={this.plusOne}>Add</button>
        <button onClick={this.minusOne}>Sub</button>
        <button onClick={this.reset}>Reset</button>
        <input type='text' onChange={this.printText}/>
        <div>
          {txt}
        </div>
      </header>
    </div>
  );
  }
};

export default App;
