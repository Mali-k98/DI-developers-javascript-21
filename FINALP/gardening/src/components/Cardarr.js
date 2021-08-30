import React from 'react'
import Card from './Card'

const Cardarr =(props)=> {
    const {plants} = props

    return (
        <div>
            {plants.map((item,i)=>{
                return <Card plants={item}/>
            })}
        </div>
    )
}

export default Cardarr
