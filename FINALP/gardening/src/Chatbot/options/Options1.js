import React from 'react'

const Options1=(props)=> {
    const options=[
        {text:'watering', handler:props.actionProvider.waterHandler, id: 1},
        {text:'temperature', handler: props.actionProvider.waterHandler, id: 2},
        {text:'humidity', handler:props.actionProvider.waterHandler, id: 3},
        {text:'light', handler:props.actionProvider.waterHandler, id: 4}
    
    ]
    const buttonsMarkup= options.map((option)=>(
        <button style={{margin:'5px'}} key={option.id} onClick={option.handler} className='option-button'>
            {option.text}
        </button>
    ))
    return (
        <div className='button-container'>
            {buttonsMarkup}
        </div>
    )
}

export default Options1
