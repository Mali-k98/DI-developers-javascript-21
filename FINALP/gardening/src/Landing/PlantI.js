import React from 'react'
import pot from '../lp-images/potted.webp'
import {useHistory} from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Index from '../Index/Index'

function PlantI() {
    let history = useHistory()
    
    const handleRoute=()=>{
        history.push('/index')
    }


    return (
        <>
        <div className='landing'>
        <img className='landingImages' src={pot}/>
        <div className='text'>
        <h1>Plant Index</h1>
        <p>The friendly guide to helping you start growing your own plants at home</p>
        </div>
        <Router>
            <Switch>
                <button className='button' onClick={handleRoute}>Get Started!</button>
            </Switch>
        </Router>
        
        </div>
        </>
    )
}

export default PlantI
