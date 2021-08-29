import logo from './logo.svg';
import React from 'react';
import Navbarm from './components/Navbarm';
import Search from './components/Search';
import MovieDisplay from './components/MovieDisplay';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Navbarm/>
      <Search/>
      <MovieDisplay/>
    </div>
  );
  }
}

export default App;
