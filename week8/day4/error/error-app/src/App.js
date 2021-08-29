import Counter from './components/Counter';
import BuggyCounter from './components/BuggyCounter';
import SingleCounter from './components/SingleCounter';
import './App.css';

function App() {
  return (
    <div>
      <h3>Click on the numbers to increase the counters.</h3>
      <h3>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h3>
      <Counter/>
      <BuggyCounter/>
      <SingleCounter/>
    </div>
  );
}

export default App;
