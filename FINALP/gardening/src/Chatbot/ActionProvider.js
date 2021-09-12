import React, { Component } from 'react'

export default class ActionProvider extends Component {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        super()
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    helloHandler=()=>{
        const message =this.createChatBotMessage('How can i help you?',{widget:'options3'})
        this.setChatbotMessage(message)
    }
    helpHandler=()=>{
        const message =this.createChatBotMessage('What do you want to know about? watering, light, humidity? ', {widget: 'options1'})
        this.setChatbotMessage(message)
    }
    waterHandler=()=>{
        const message =this.createChatBotMessage('check out our plant index to understand scales of watering go to : HOME-> PLANTINDEX')
        
        this.setChatbotMessage(message)
    }
    moreHandler=()=>{
        const message =this.createChatBotMessage('which one?',{widget:'options2'})
        this.setChatbotMessage(message)
    }
    killHandler=()=>{
        const message =this.createChatBotMessage('Stop being a plant serial killer! Water you plants right read by article all about watering right! Watering plants wrong is the main cause of plant death RIP!')
        this.setChatbotMessage(message)
    }
    chooseHandler=()=>{
        const message =this.createChatBotMessage('decide how much space you can accommodate, then do a little digging to see if these plants are suited to thrive in their new home based on their care requirements. Check out our plant index for more information!')
        this.setChatbotMessage(message)
    }
    repotHandler=()=>{
        const message =this.createChatBotMessage('Repot if : Roots are growing through the drainage holes , It’s top heavy or Your plant’s potting mix dries out more quickly than usual')
        this.setChatbotMessage(message)
    }
    airHandler=()=>{
        const message =this.createChatBotMessage('Snake Plant, Peace Lily,English Ivy, Aloe Vera')
        this.setChatbotMessage(message)
    }
    toxicHandler=()=>{
        const message =this.createChatBotMessage('Keep your little ones and your furry ones safe: Peace Lilies, Asparagus Fern, Bird of Paradise, Devil’s Ivy, Sansevieria, Dieffenbachia')
        this.setChatbotMessage(message)
    }
    wrongHandler=()=>{
        const message =this.createChatBotMessage('Here are some common ailments to troubleshoot: Too much water, Too little water, Too much light, Too little light, Too move movement, Needs repotting, Problems with repotting, Not enough fresh air')
        this.setChatbotMessage(message)
    }
    
    setChatbotMessage=(message)=>{
        this.setState(state=> ({...state, messages: [...state.messages, message] }))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
