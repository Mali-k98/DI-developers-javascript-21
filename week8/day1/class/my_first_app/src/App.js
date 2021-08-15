import logo from './logo.svg';
import './App.css';
// import Chocolate from './Chocolate'
import Card from './components/Card';

const robots = [
  {name:' robot 1',email:'robo1@robomail.com',id:1},
  {name:' robot 2',email:'robo2@robomail.com',id:2},
  {name:' robot 3',email:'robo3@robomail.com',id:3},
  {name:' robot 4',email:'robo4@robomail.com',id:4},
  {name:' robot 5',email:'robo5@robomail.com',id:5},
  {name:' robot 5',email:'robo5@robomail.com',id:6},
  {name:' robot 5',email:'robo5@robomail.com',id:7},
  {name:' robot 5',email:'robo5@robomail.com',id:8},
]
const App = ()=> {
  return (
    <>
    <Ex/>
    {
      robots.map((item,i)=>{
        return <Card robotinfo ={item}/>
      })
    }
      {/* <Card name={'robot 1'} email={'robo1@robomail.com'} id={1}/>
      <Card name={'robot 2'} email={'robo2@robomail.com'} id={2}/>
      <Card name={'robot 3'} email={'robo3@robomail.com'} id={3}/> */}
    </>
  );
}

export default App;
