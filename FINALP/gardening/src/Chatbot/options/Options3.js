import React from 'react'

const Options3=(props)=> {
    const options=[
        {text:'i want to learn about plants', handler:props.actionProvider.helpHandler, id: 1},
        {text:'i want to know something', handler: props.actionProvider.moreHandler, id: 2}
    
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

export default Options3