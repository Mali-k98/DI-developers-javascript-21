import React,{useEffect} from 'react'
import { h3 } from 'react-router-dom'
import Navbar from '../Landing/NavBar'
import arch from '../nurse-img/arch.jpg'
import cactus from '../nurse-img/cactus.webp'
import jungle from '../nurse-img/jungle.webp'
import pots from '../nurse-img/pots.jpg'
import seedlings from '../nurse-img/seedlings.jpg'
import suc from '../nurse-img/suc.jpg'




function Nursery() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <Navbar/>
        <div className='nList'>
            <div className='prod-nav'>
                <h3 className='focus'>All</h3>
                <h3>Seeds</h3>
                <h3>Plants</h3>
                <h3>Pots</h3>
                <h3>Tools</h3>
                <h3>Gadgets</h3>
                <h3>Furniture</h3>
                <h3>Decor</h3>
                <h3>Lights</h3>
                <h3>Green houses</h3>
            </div>
            <div className='prod-img'>
                <img src={arch}/>
                <img src={cactus}/>
                <img src={jungle}/>
                <img src={pots}/>
                <img src={seedlings}/>
                <img src={suc}/>
            </div>
        </div>
        </>
    )
}

export default Nursery
