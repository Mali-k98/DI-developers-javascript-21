import React from 'react';
import Colour from './Colour';
import Shoot from './Shoot';
import './App.css';

class App extends React.Component  {
    constructor(){
        super();
        this.state={}
    }



render(){
    return (
        <div className="App">
            <Colour/>
            <Shoot/>
        </div>
    )
}
}

export default App;

