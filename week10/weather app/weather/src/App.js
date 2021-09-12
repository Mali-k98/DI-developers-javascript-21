import React,{useState} from 'react';

import './App.css';
const api ={
  key:'55b657f137ff46b8d59c7e2e77633b41',
  base:'http://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query,setQuery]=useState('')
  const[weather,setWeather]=useState({})
  
  const search =evt=>{
    // if(evt.key==="enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=> {
        
        setWeather(result)
        setQuery('')
      })
    // }
  }
  
  const dateBuilder = (d)=>{
    let months = ['January','Febuary','March','April','May','June','July','August','September','October','Noveber','December']
    
    let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    
    return `${day} ${date} ${month} ${year}`
  }
  
  
  return (
    <div className={(typeof weather.main != 'undefined')
    ? ((weather.main.temp > 16) 
    ? 'App warm' : 'App')
    :'App'}>
      <main>
        <div className='searchBox'>
        <input type='text' className='searchBar' placeholder='search...' 
        onChange={e=> setQuery(e.target.value)}
        value={query}/>
        <button onClick={search}>Search</button>
        </div>
        {(typeof weather.main != 'undefined') ? ( 
        <div>
          <div className='locationBox'>
            <div className='location'>{weather.name},{weather.sys.country}</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className='weatherBox'>
            <div className='temp'>{Math.round(weather.main.temp)}°c</div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
