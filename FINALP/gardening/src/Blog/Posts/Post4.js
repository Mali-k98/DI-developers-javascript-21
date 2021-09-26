
import Navbar from '../../Landing/NavBar'
import hang from '../../blog-img/hang.jpg'
import height from '../../blog-img/height.jpg'

function Post4() {
    return (
        <>
        <Navbar/>
        <div className='post'>
            <h1>All about positions</h1>
            <p>Decorating with plants is a timeless design element and there are many wonderful benefits to having plants in your home. But I have found it is not easy for everyone to know how to decorate with plants or pick out plants. Knowing the best indoor house plants for your home is a great place to begin when decorating with plants. Whether you have lots of space or minimal space, a green thumb or not you will be able to find greenery here that will bring life and style to your home.</p>
            <p>Plants are more than decorations; they play a part in cleaning the air you breathe inside your home. Today we are going to talk about the best indoor plants, the most popular indoor plants, how they improve our home air quality, and how to decorate with plants.</p>
            <div style={{float:'left'}}>
            <img style={{height:'43vh',padding:'10px'}} src={hang} alt='hanging plants'/>
            <h6>(hanging plants add for a great feature to the room)</h6>
            </div>
            <p>One of the easiest accessories to decorate your home with is plants and one live plant in a room will, for a lack of better words, give the room life. Plants are great for any room in your homes like the living room, kitchen, home office, and bathroom. But my favorite empty spaces to decorate with plants is windows so let's start with adding plants to windows.</p>
            <div style={{float:'right'}}>
            <img style={{height:'35vh',padding:'10px'}} src={height} alt='lots of plants'/>
            <h6>(alternating in height creates defintion)</h6>
            </div>
            <p>A fun way to decorate with plants is to add different coordinating pots or plant bags like white planters, terra cotta pots, and canvas bags. If your window is not deep then look for tiny pots and plants like my daughter did in her kitchen window. And use different plants in your window.</p>
            <p>Porches are another great place to decorate with plants.Your local nursery can help you plan out what to put in your pot or if you are good at planting then you have this covered.</p>
            <p>Did you know there are many things in your home that produce toxins in the air?  Ammonia, Benzene, Xylene, Formaldehyde, and Trichloroethylene are common chemicals in products you use or have on finishes in your home.  </p>
        </div>
        </>
    )
}

export default Post4
