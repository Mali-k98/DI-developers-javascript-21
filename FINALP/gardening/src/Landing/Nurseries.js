import React from 'react'
import nursery from '../lp-images/nursery.jpg'

function Nurseries() {
    return (
        <>
        <div className='landing'>
        <img className='landingImages' src={nursery}/>
        <div className='text'>
        <h1>Nurseries</h1>
        <p>A helpful directory of where to buy all your starting plants</p>
        </div>
        <button className='button' >Get Started!</button>
        </div>
        </>
    )
}

export default Nurseries
