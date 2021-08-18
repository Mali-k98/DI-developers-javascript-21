import Form from './dailychallenge/Form';
import Result from './dailychallenge/Result';
import React from 'react';
import './App.css';




class App extends React.Component  {
  constructor(){
    super();
    this.state={
      
    }
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Result/>
      </header>
    </div>
  );
  }
}

export default App;
