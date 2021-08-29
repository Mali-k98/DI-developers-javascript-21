import React from 'react';
import Cardlist from './components/Cardlist'
import SearchBox from './components/SearchBox';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({robots:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  componentDidUpdate() {
    console.log(this.state.robots);
  }

  render() {
    const {robots} = this.state;
    return (
      <>
        <SearchBox/>
        <Cardlist robots = {robots} />
      </>
    );
  }
}

export default App;