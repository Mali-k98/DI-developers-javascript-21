import React,{useEffect,useState} from 'react';
import './App.css';

const App=()=> {
    
  const API_KEY='932a602fdd9f7e6f7593dc12bf1ab727	'
  const API_ID ="7fca2b06"

  const [recipes,setRecipes]= useState([])
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
  const response = await fetch(
    `http://api/edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`)
  const data = await response.json()
  console.log(data);
  setRecipes(data.hits)
}


  return (
    <>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-btn' type='submit'>Search</button>
      </form>
    </>
  );
}

export default App;
