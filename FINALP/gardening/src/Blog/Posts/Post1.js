// import React from 'react'
import Navbar from '../../Landing/NavBar'
import can from '../../blog-img/watering.jpg'

function Post1() {
    return (
        <div className="post_page">
            <Navbar/>
        <div className='post'>
            <h1>Watering right</h1>
            <p>Healthy plants will rarely say no to a drink of water, but it’s all in the timing. One of the biggest mistakes is sticking to an exact watering schedule. Watering on exactly the same day every week may do more harm than good. For most plants, only water when the soil is dry — not just surface dry, but 2-inches-deep dry. Use your fingers to easily determine soil moisture levels.</p>
            <p>Plant size will also determine how much water your plant needs. In smaller pots with less soil, the soil will dry out faster than in larger pots with lots of soil. If you have two of the same plant and one is larger than other, one will need water more often than the other.</p>
            <div style={{float:'left'}}>
            <img style={{height:'40vh',padding:'10px'}} src={can} alt='girl watering flowers'/>
            <h6>(A little girl watering flowers)</h6>
            </div>
            <p>Tip: For large plants, pour water and let it soak in. Repeat until soil is saturated. Let it dry until watering again. For smaller plants do a semi-soak by placing the potted plant in a tray and pouring water over the soil until the tray has about ¼ of an inch of water. Let the plant sit for 8 hours, then drain the water.</p>
            <p>We’re inclined to ‘stay hydrated’ but plants can drown if they are flooded with too much water. If soil is left too wet for too long, it can cause root rot. That’s what we call overwatering. On the other hand, if your plant’s soil is consistently too dry you’re likely underwatering. Letting your soil dry out before watering is key for plants to receive the the perfect balance of water and oxygen.</p>
            <p>Tip: It’s okay to be flexible in your plant care habits. Monitor how water affects your plant. The rule of thumb is: most common houseplants prefer frequent waterings, but there will be special exceptions.</p>
            <p>Keep in mind your soil is like a sponge. Most houseplants like a porous soil, allowing room for water and air pockets. If your soil is moist to begin with, hold off on watering for now. If you notice water pours out through the drainage holes immediately, your soil is actually bone dry and the soil is repelling water, rather than soaking it in. Avoid pouring water onto bone dry soil. Water will only move through and around the edges of your planter and will not be absorbed by the roots. Your plant should absorb water slowly through its roots so, before you water again, you’ll want to check how dry the soil is. Use your fingers and feel if the soil is wet at least 2 inches below the surface. If so, you can add water. If your soil is wet at the surface, you can hold off.</p>
        </div>
        </div>
    )
}

export default Post1
