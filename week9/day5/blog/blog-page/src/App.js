import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route path=':/post_id' component={Post}/>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
