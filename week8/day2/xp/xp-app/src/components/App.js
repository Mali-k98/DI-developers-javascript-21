import logo from './logo.svg';
import PrintHello from './PrintHello';
import Bob from './Bob';
import Paul from './Paul';
import Jumbotron from './Jumbotron';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(){
      super()
      this.state={
      
      }
    }
    render(){
  return (
    <div className="App">
      <h6>i love react</h6>
      <PrintHello/>
      <Bob/>
      <Paul/>
      <Jumbotron/>
    </div>
  );
  }
}

export default App;
