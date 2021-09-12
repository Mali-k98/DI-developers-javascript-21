import React from 'react'

const Options2=(props)=> {
    const options=[
        {text:'how do i not kill my plants?', handler:props.actionProvider.killHandler, id: 1},
        {text:'how do i choose a plant?', handler: props.actionProvider.chooseHandler, id: 2},
        {text:'when should i repot my plant?', handler:props.actionProvider.repotHandler, id: 3},
        {text:'air purifying plants', handler:props.actionProvider.airHandler, id: 4},
        {text:'houseplants toxic to kids and pets', handler:props.actionProvider.toxicHandler, id: 5},
        {text:'what is wrong with my houseplant?', handler:props.actionProvider.wrongHandler, id: 6}
    
    
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

export default Options2