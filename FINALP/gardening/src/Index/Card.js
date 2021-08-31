import React from 'react'
// import image from `../images/mint.webp`

const Card=(props) =>{
    const {plants} = props
    
    const {photo,name,type,latin} = plants
    
    
    return (
        <div>
            <img src={photo} alt='plant image'/>
            <h3>{name}<p>({type})</p></h3>
            <p>{latin}</p>
            <button>Get more info</button>
        </div>
    )
}

export default Card
