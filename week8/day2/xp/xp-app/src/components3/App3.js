// import Car from "./Car";
import Phone from "./Phone";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';

// const carInfo = {
//     name: 'ford',
//     model:'mustang'
// }

class App3 extends React.Component {

    constructor(){
        super()
        this.state={
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
        }
        changeColor = () => {
            this.setState({color: "blue"});
        }
        render(){
    return (
        
        <div className="App" >
        <Phone changeColor={this.changeColor}/>
        {/* <Car carInfo={carInfo}/> */}
        </div> 
    );
    }
}

export default App3;
