import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Landing/NavBar'
import PlantI from './Landing/PlantI';
import Shop from './Landing/Shop'
import Nurseries from './Landing/Nurseries';
import React from 'react';
import Contact from './Landing/Contact';


class App extends React.Component {


render(){
  return (
    <>
    <div className='rooter'>
      <NavBar/>
    </div>
    <div className='landCards'>
    <PlantI/>
    <Nurseries/>
    <Shop/>
    </div>
    <Contact/>
    </>
  );
}
}

export default App;
