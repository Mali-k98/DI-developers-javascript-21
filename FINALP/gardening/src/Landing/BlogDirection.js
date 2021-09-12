import React from 'react'
import nursery from '../lp-images/shop.jpg'
import { Link} from 'react-router-dom'


function BlogDirection() {
    

    return (
        <>
        <div className='landing'>
        <img className='landingImages' src={nursery}/>
        <div className='text'>
        <h1>Blog</h1>
        <p>A garden lovers blogs about gardening!</p>
        </div>
        <button className='button'><Link to='/blog'> Get Started!</Link></button>
        </div>
        </>
    )
}

export default BlogDirection