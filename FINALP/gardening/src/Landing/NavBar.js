import React from 'react'
import {Link} from 'react-router-dom'
import Scroll from 'react-scroll'

function Navbar() {
    return (
        <div className='navbar'>
        <div className="logo">
        <Link to="/" className='mylogo'>Janice's Garden</Link>
        </div>
        <nav>
        
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/help">Help</Link>
            <Link className="nav-link" to="/">Contact</Link>
        </nav>
        </div>
    )
}

export default Navbar
