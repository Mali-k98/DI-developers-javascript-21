import React from 'react'
import Card from './Card'

const Cardarr =(props)=> {
    const {plants} = props
    
    
    return (
        <div>
        <div  className='card-list'>
            {plants.map((item,i)=>{
                return <Card plantsInfo={item}/>
            })}
        </div>
        </div>
    )
}

export default Cardarr
