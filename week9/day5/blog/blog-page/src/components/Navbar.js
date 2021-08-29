import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className='nav-nav-wrapper red-darken-3'>
            <div className='container'>
                <a href='/'  className='brand-logo'>Redux Blog</a>
                <ul class='right'>
                    <li className='home'>
                        <Link to='/'></Link>Home   
                    </li>
                    
                    <li>
                        <NavLink to='/about'></NavLink>About 
                    </li>
                    
                    <li>
                        <NavLink to='/contact'></NavLink>Contact 
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}


export default Navbar