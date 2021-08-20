
import React, {useState,useEffect,useRef} from 'react';
import './App.css';

function App (){
  const [quotes, setQuotes] = useState('')
  const clrRef = useRef('')
  let colours = ['#6495ED','#ef4565','#d597ce','#ffc58a','#ccffdf','#f5b0cb']
  let ranclr = Math.floor(Math.random()* colours.length)


  const getQuote=()=>{
    fetch('https://type.fit/api/quotes')
    .then(res=>res.json())
    .then(data=>{
      let ranNo = Math.floor(Math.random()* data.length)
      setQuotes(data[ranNo])
    })
  }
  useEffect(()=>{
  getQuote()
  },[])
  // useEffect(()=>{
  //   clrRef.current.style.color = colours[Math.floor(Math.random()* colours.length)]
  // },[quotes])
  
  return (
    <div className="App" style={{backgroundColor:ranclr}}>
      <div className='quote'>
      <p style={{backgroundColor:ranclr}}>{quotes.text}</p>
      <p style={{backgroundColor:ranclr}}>-{quotes.author}</p>
      <div className='btnContainer'>
      <button className='btn' onClick={getQuote}>Get Quote</button>
      </div>
      </div>
    
    </div>
  );
}

export default App;
