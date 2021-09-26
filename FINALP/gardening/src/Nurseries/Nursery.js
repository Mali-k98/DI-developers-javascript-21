import React,{useEffect} from 'react'
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
            <h1>Nurseries</h1>
            Here is a list of our favourite nurseries all over the country:
        <div >
            <h2>Jerusalem</h2>
            <ul>
                <div style={{float:'right'}}>
                    <img className="nurse-img" src={arch} alt='a nursery image'/>
                    <h6>garden</h6>
                </div>
                <li className='li'><a href="https://www.facebook.com/mashtelamehalev/?show_switched_toast=0&show_switched_tooltip=0&show_podcast_settings=0">Meshtala mehalev</a></li>
                <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
                <li className='li'><a href="https://www.agro-noy.com/about_cupon/">Agro Noy</a></li>
                <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
                <li className='li'><a href="http://www.mashtelatavi.co.il/">Mashtelat Avi</a></li>
                <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
        
        
        </ul>
        </div>
        <div>
            <h2>Tel Aviv</h2>
            <ul>
                <div style={{float:'left'}}>
                    <img className="nurse-img" src={cactus} alt='a nursery image'/>
                    <h6>garden</h6>
                </div>
                <li className='li'><a href="https://wlovep.com/">We Love Plants</a></li>
                <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
                
                <li className='li'><a href="https://mashtela-urbanit.co.il/">Mashtela Urabnit</a></li>
                <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
                
                <li className='li'><a href="https://www.boolcactus.com/">BOOL Cactus</a></li>
                <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
        
        
        </ul>
        </div>

        <div>
            <h2>Center</h2>
            <div style={{float:'right'}}>
                <img className="nurse-img" src={jungle} alt='a nursery image'/>
                <h6>garden</h6>
            </div>
            <ul>
            <li className='li'><a href="https://www.kolbogan.co.il/%D7%9E%D7%A9%D7%AA%D7%9C%D7%94">Kol Bogan</a></li>
            <img/>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
            
            <li className='li'><a href="https://www.gan-yarak.co.il/">Gan Yarak</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
        
        </ul>
        </div> 

        <div>   
            <h2>Haifa</h2>
            <div style={{float:'left'}}>
                <img className="nurse-img" src={pots} alt='a nursery image'/>
                <h6>garden</h6>
            </div>
            <ul>
            <li className='li'><a href="https://www.facebook.com/shukplants">Shuk Plants</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
            
            <li className='li'><a href="https://www.zivm.co.il/">Ziv</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
        
        </ul>
        </div>
        
        <div style={{float:'left'}}>   
            <h2>North</h2>
            <div style={{float:'right'}}>
                <img className="nurse-img" src={seedlings} alt='a nursery image'/>
                <h6>garden</h6>
            </div>
            <ul>
            <li className='li'><a href="https://www.facebook.com/mashtelateinhamifratz/">Mashtelat Ein Hamifratz</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
            
            <li className='li'><a href="https://www.bialik-mashtelot.com/">Bialik Mashtelot</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
        
        </ul>
        </div>  

        <div> 
            <h2>South</h2>
            <div style={{float:'left'}}>
                <img className="nurse-img" src={suc} alt='a nursery image'/>
                <h6>garden</h6>
            </div>
            <ul>
            <li className='li'><a href="http://www.hashtil.com/">Hashtil</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
            
            <li className='li'><a href="https://www.balabanmashtela.com/">Mishtelet Balaban</a></li>
            <p>In the center of the city this plant nursery has a wide selection of plants and starter seeds ready to be taken home</p>
        
        </ul>      
        </div>
        </div>
        </>
    )
}

export default Nursery
