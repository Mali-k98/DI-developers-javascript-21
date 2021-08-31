import React,{useEffect,useState} from 'react';
import './App.css';

const App=()=> {
  
  const fetchData=()=>{
  return fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=chicken`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
		"x-rapidapi-key": "db172b0929msh659d297ba64258bp1b898cjsnb7f3ac452162"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
},[]);
}
  
  
  useEffect(()=>{
    console.log('effect has run');
  })
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
