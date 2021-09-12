import React from 'react'
import nursery from '../lp-images/nursery.jpg'
import {Link} from 'react-router-dom'

function Nurseries() {
    return (
        <>
        <div className='landing'>
        <img className='landingImages' src={nursery}/>
        <div className='text'>
        <h1>Nurseries</h1>
        <p>A helpful directory of where to buy all your starting plants</p>
        </div>
        <button className='button'><Link to='/nursery'>Get Started!</Link> </button>
        </div>
        </>
    )
}

export default Nurseries
