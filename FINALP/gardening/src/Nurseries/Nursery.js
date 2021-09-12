import React from 'react'
import Navbar from '../Landing/NavBar'

function Nursery() {
    return (
        <>
        <Navbar/>
        <div className='nList'>
        <div >
            <h1>Jerusalem</h1>
            <ul>
            <li><a href="https://www.facebook.com/mashtelamehalev/?show_switched_toast=0&show_switched_tooltip=0&show_podcast_settings=0">Meshtala mehalev</a></li>
            <li><a href="https://www.agro-noy.com/about_cupon/">Agro Noy</a></li>
        </ul>
        </div>
        <div>
            <h1>Center</h1>
            <ul>
            <li><a href="https://www.kolbogan.co.il/%D7%9E%D7%A9%D7%AA%D7%9C%D7%94">Kol Bogan</a></li>
            <li><a href="https://www.gan-yarak.co.il/">Gan Yarak</a></li>
        </ul>
        </div> 
        <div>   
            <h1>North</h1>
            <ul>
            <li><a href="https://www.facebook.com/mashtelateinhamifratz/">Mashtelat Ein Hamifratz</a></li>
            <li><a href="https://www.bialik-mashtelot.com/">Bialik Mashtelot</a></li>
        </ul>
        </div>   
        <div> 
            <h1>South</h1>
            <ul>
            <li><a href="http://www.hashtil.com/">Hashtil</a></li>
            <li><a href="https://www.balabanmashtela.com/">Mishtelet Balaban</a></li>
        </ul>      
        </div>
        </div>
        </>
    )
}

export default Nursery
