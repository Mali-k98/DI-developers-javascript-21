import React from 'react';
import { connect } from 'react-redux';
import { changeText1 } from './redux/actions';
import { changeText2 } from './redux/actions';
import Child from './components/Child';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      // text:'',
    
    }
  }
  // handleChange=(e)=>{
  //   this.setState({text1:e.target.value})
  // }
  
  render(){
  return (
    <div >
      <h1>simple redux app</h1>
      <h3>here is property one:{this.props.text1}</h3>
      <h3>here is property two:{this.props.text2}</h3>
      
      <input type='text' onChange={this.props.handleChange}/>
      <input type='text' onChange={this.props.handleChange2}/>
    
    <h1>child</h1>
    <Child/>
    
    </div>
  );
  }
}
const mapStateToProps = (state)=>{
  return {
  text1: state.text1,
  text2: state.text2
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    handleChange : (event)=>dispatch(changeText1(event.target.value)),
    handleChange2: (event)=>dispatch(changeText2(event.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
