import React from 'react'
import nursery from '../lp-images/shop.jpg'
import { Link} from 'react-router-dom'


function BlogDirection() {
    

    return (
        <div style={{alignItems:'center'}}>
        <Link to='/blog' style={{textDecoration:'none'}}><button className='landing text_styles'>
        <img className='landingImages' src={nursery}/>
        <div className='text'>
        <h1>Blog</h1>
        <p>A garden lovers blogs about gardening! Learn more here!</p>
        </div>
        {/* <Link to='/blog'> <button className='button'>Get Started!</button></Link> */}
        </button></Link> 
        </div>
    )
}

export default BlogDirection