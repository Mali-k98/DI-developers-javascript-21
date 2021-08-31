import React from 'react'
import nursery from '../lp-images/shop.jpg'

function Shop() {
    return (
        <>
        <div className='landing'>
        <img className='landingImages' src={nursery}/>
        <div className='text'>
        <h1>Shop</h1>
        <p>Get your everyday gardening essentials here!</p>
        </div>
        <button className='button' >Get Started!</button>
        </div>
        </>
    )
}

export default Shop