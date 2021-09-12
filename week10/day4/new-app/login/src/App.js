import React from 'react';
import { Switch,Router,Route } from 'react-router';
import { Link,withRouter } from 'react-router-dom';
import './App.css';
import Main from './compo/Main';
import RegForm from './compo/RegForm';
import Singin from './compo/Singin';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user:{
        id:'',
        name:'',
        email:'',
        joined:''
      },
      token:null
    }
  }
  loadUser=(data)=>{
    this.setState({
      user:{
        id:data.user.id,
        name:data.user.name,
        email:data.user.email,
        joined:data.user.joined
      },
      token : data.token
    })
  }

  render(){
    const{user,token}=this.state
  return (
    <div className="App">
      <nav>
        <Link to ='/'>Dashborad</Link>
        <Link to='/register'>Register</Link>
        <Link to='/signin'>Signn</Link>
      </nav>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/register' render={(props)=> <RegForm {...props} loadUser={this.loadUser}/>}/>
        <Route path='/signin' render={(props)=> <Singin {...props} loadUser={this.loadUser}/>}/>
      </Switch>
    </div>
  );
  }
}

export default App;
