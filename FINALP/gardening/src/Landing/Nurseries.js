import React from 'react'
import nursery from '../lp-images/nursery.jpg'
import {Link} from 'react-router-dom'

function Nurseries() {
    return (
        <div style={{alignItems:'center'}}>
        <Link to='/nursery' style={{textDecoration:'none'}}><button className='landing text_styles'>
        {/* <div className='landing'> */}
        <img className='landingImages' src={nursery}/>
        <div className='text'>
        <h1>Products</h1>
        <p>A helpful directory of where to buy all the best gardening equipment!</p>
        </div>
        {/* <Link to='/nursery'><button className='button'>Get Started! </button></Link> */}
        </button></Link> 
        </div>
    )
}

export default Nurseries
