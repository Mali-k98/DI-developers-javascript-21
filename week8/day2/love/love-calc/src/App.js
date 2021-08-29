import React from 'react';
import Yname from './components/Yname';
import Cname from './components/Cname';
import Calc from './components/Calc';
import Result from './components/Result';
import './App.css';


const App =()=> {
  // constructor(){
  //   super()
    // this.state={
    //     yname:'',
    //     cname:'',
    //     results:{}
    // }
  // }
  
  // handleYname =(e)=>{
  //   this.setState({yname:e.target.value})
  // }
  // handleCname =(e)=>{
  //   this.setState({cname:e.target.value})
  // }
  
// handleClick=()=>{
//   const{yname,cname} = this.state
// fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${yname}&sname=${cname}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "db172b0929msh659d297ba64258bp1b898cjsnb7f3ac452162",
// 		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	return response.json()
// })
// .then(data=>{
//   console.log(data);
//   this.setState({results:data})
// })
// .catch(err => {
// 	console.error(err);
// });
// }
  

  // render(){
  return (
    <div className="App">
      <header className="App-header">
        {/* <Yname handleYname={this.handleYname} yname={this.state.yname}/>
        <Cname handleCname={this.handleCname} cname={this.state.cname}/>
        <Calc handleClick={this.handleClick}/>
        <Result results={this.state.results}/> */}
        <Yname/>
        <Cname/>
        <Calc/>
        <Result/>
      </header>
    </div>
  );
  }
// }

export default App;
