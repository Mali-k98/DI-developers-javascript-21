import React from 'react'
import Navbar from '../Landing/NavBar'
import Items from './Items'
import {useEffect} from 'react'

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        
        <div>
            <Navbar/><br/>
            <h1 className='title'>Blog</h1>
            <Items/>
        </div>
    )
}

export default Blog
