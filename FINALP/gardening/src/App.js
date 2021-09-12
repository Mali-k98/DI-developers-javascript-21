
import './App.css';
import { Switch,Route } from 'react-router-dom'

import React from 'react'
import Landing from './Landing/Landing';
import Index from './Index/Index';
import Nursery from './Nurseries/Nursery'
import Blog from './Blog/Blog'
import About from './About/About'
import Help from './Chatbot/Help';
import Post1 from './Blog/Posts/Post1';
import Post2 from './Blog/Posts/Post2';
import Post3 from './Blog/Posts/Post3'
import Post4 from './Blog/Posts/Post4'


function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/index' component={Index}/>
        <Route exact path='/nursery' component={Nursery}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/help' component={Help}/>
        <Route exact path='/blog1' component={Post1}/>
        <Route exact path='/blog2' component={Post2}/>
        <Route exact path='/blog3' component={Post3}/>
        <Route exact path='/blog4' component={Post4}/>
      </Switch>
    </div>
  )
}

export default App

