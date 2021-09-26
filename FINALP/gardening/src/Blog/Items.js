import { Link } from 'react-router-dom'

import a from '../blog-img/can.jpeg'
import c from '../blog-img/cute-gnome.jpg'
import d from '../blog-img/gloves.jpg'
import e from '../blog-img/lrg-pot.jpeg'



function Items() {
    return (
        <div className='blog-item'>

        <div className='slip' >
            < img className='item' src={a}/>
            <p>Watering Right</p>
            <p>common newbie mistakes, over watering and root rot</p>
            <Link to='/watering-tips'><button>Read Article</button></Link> 
        </div>

        <div className='slip'>
            < img className='item' src={c}/>
            <p>Gnomes</p>
            <p>The history of Gnomes and how they came to be our favourite garden decoration!</p>
            <Link to='/gnomes'><button>Read Article</button></Link> 
        </div>

        <div className='slip'>
            < img className='item' src={d}/>
            <p>Lets Talk Soil</p>
            <p>Understanding what soil is best!</p>
            <Link to='/soil'><button>Read Article</button></Link> 
        </div>

        <div className='slip'>
            < img className='item' src={e}/>
            <p>All about positions</p>
            <p>decorarion tips: how to poition your plants to keep your home chic</p>
            <Link to='/decor'><button>Read Article</button></Link> 
        </div>

        </div>
    )
}

export default Items
