import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const {executeScroll, scrollToSection} = props
    
    return (
        <div className='navbar'>
        <Link className="logo" to="/">
        <h1 className='mylogo'>Bloom's</h1>
        </Link>
        <nav>
        
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/" onClick={scrollToSection}>About</Link>
            <Link className="nav-link" to="/" onClick={executeScroll}>Contact</Link>
        </nav>
        </div>
    )
}

export default Navbar
