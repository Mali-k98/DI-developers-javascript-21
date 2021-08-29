import Alert from './components/components2/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';


class App extends React.Component {

    constructor(){
        super()
        this.state={
            danger:true,
        }
        }
        render(){
    return (
        <div className="App">
        if(this.state.danger){
        <Alert text="OMG! Something really bad has happended!" />
        }
        </div>
    );
    }
}

export default App;
