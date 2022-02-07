import React,{useEffect} from 'react'
import Navbar from '../Landing/NavBar'
import { Products } from './Products'


function Nursery() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="products_page">
        <Navbar/>
        <div className='nList'>
            <Products/>
        </div>
        </div>
    )
}

export default Nursery
