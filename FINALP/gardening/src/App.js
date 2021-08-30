import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Cardarr from './components/Cardarr';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
        plants:[]
    }
}
componentDidMount(){
    fetch('http://localhost:4000/plants')
    .then(response=>response.json())
    .then(data => {this.setState({plants:data})})
    .catch(e => {console.log(e)})
}

render(){
  return (
    <div className="App">
      <Search/>
      <Cardarr/>
    </div>
  );
}
}

export default App;
