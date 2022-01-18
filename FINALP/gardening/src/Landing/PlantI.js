import React from 'react'
import pot from '../lp-images/potted.webp'
import { Switch, Route, Link } from 'react-router-dom';
import Index from '../Index/Index';

function PlantI() {

    return (
        <div style={{alignItems:'center'}}>
        <Link to='/index' style={{textDecoration:'none'}}><button className='landing text_styles'>
        <img className='landingImages' src={pot}/>
        <div className='text'>
        <h1>Plant Index</h1>
        <p>The friendly guide to helping you start growing 
            your own plants at home</p>
        </div>
        {/* <Link to='/index'> <button className='button'>Get Started!</button></Link> */}
        
        </button></Link> 
        </div>
    )
}

export default PlantI
