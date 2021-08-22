import React from 'react';

import AutoText from './components/AutoText';
import countries from './components/countries';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <AutoText items={countries}/>
    </div>
  );
  }
}

export default App;
