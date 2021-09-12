import React from 'react'
import { useState } from 'react'


const Card=(props) =>{
    const {plantsInfo} = props
    const {photo,name,type,latin,light,temp,humidity,water}=plantsInfo
    
    const [click, setClick] =useState(false)
    
    const handleClick=(e)=>{
        e.preventDefault()
        
        setClick(true)
    }
    const returnClick=(e)=>{
        e.preventDefault()
        
        setClick(false)
    }

    if(click != true){
    return (
        <div className='card'>
            <img src={`${photo}`} alt={`${name} image`} className='card-img'/>
            <h3>{name}({type})</h3>
            <p style={{fontStyle:'italic'}}>{latin}</p>
            <button onClick={handleClick}>Get more info</button>
        </div>
    )
    }else{
        return(
            <div className='card'>
                Plant Requirments:
                <p>light:{light}</p>
                <p>temp:{temp}</p>
                <p>humidity:{humidity}</p>
                <p>water:{water}</p>
                <button onClick={returnClick}>Back</button>
            </div>
        )
    }
}

export default Card
