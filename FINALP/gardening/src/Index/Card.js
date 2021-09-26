import React ,{useState} from 'react'
import tem from '../card-img/temp.png'
import sun from '../card-img/sun.png'
import hum from '../card-img/hum.png'
import drop from '../card-img/drop.png'


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

    if(click !== true){
    return (
        <div className='card'>
            <img src={`${photo}`} alt={`${name} image`} className='card-img'/>
            <h4>{name}({type})</h4>
            <p style={{fontStyle:'italic'}}>{latin}</p>
            <button onClick={handleClick}>Get more info</button>
        </div>
    )
    }else{
        return(
            <div className='card'>
                Plant Requirments:
                <p><img style={{height:'8vh'}} src={sun}/> light: {light}</p>
                <p><img style={{height:'7vh'}} src={tem}/> temp: {temp}</p>
                <p><img style={{height:'6vh'}} src={hum}/> humidity: {humidity}</p>
                <p ><img style={{height:'9vh'}} src={drop}/> water: {water}</p>
                <button onClick={returnClick}>Back</button>
            </div>
        )
    }
}

export default Card
