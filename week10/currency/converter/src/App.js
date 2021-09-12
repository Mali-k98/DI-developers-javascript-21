import React,{useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './compo/CurrencyRow';


const url = `http://data.fixer.io/api/latest?access_key=9c7e7839545b1b92cb691e20e1bb32c9`

function App() {
  const [CurrencyOptions,setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency]=useState()
  const [toCurrency, setToCurrency]=useState()
  const [er,setEr] = useState()
  const [amount,setAmount]=useState(1)
  const [amountFromC, setAmountFromC]=useState(true)
  // console.log(er); 
  let toAmount, fromAmount 
  if(amountFromC){
    fromAmount = amount
    toAmount= amount*er
  }else{
    toAmount = amount
    fromAmount = amount/ er
  }


  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      const fistC = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.rates)
      setToCurrency(fistC)
      setEr(data.rates[fistC])
    })
    .catch(e=>console.log(e))
  })
  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountFromC(true)
  }
  function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountFromC(false)
  }
  
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyRow
        CurrencyOptions={CurrencyOptions}
        selectedC={fromCurrency}
        onChangec={e=> setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className='equals'>=</div>
      <CurrencyRow
        CurrencyOptions={CurrencyOptions}
        selectedC={toCurrency}
        onChangec={e=> setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
}

export default App;
