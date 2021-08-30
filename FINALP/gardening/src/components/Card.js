import React from 'react'

const Card=(props) =>{
    const {plants} = props

    const {img,name,type,latin} = plants
    return (
        <div>
            <img src={`../images/${img}`} alt='plant image'/>
            <h3>{name}<p>({type})</p></h3>
            <p>{latin}</p>
            <button>Get more info</button>
        </div>
    )
}

export default Card
