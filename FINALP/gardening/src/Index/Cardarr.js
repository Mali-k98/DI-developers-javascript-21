import React from 'react'
import Card from './Card'
import Scale from './Scale'


const Cardarr =(props)=> {
    const {plants} = props
    
    
    return (
        <div>
        <div  className='card-list'>
            <Scale/>
            {plants.map((item,i)=>{
                return <Card plantsInfo={item}/>
            })}
        </div>
        </div>
    )
}

export default Cardarr
