import React, { Component } from 'react'

class MessageParser extends Component {
    constructor(actionProvider,state) {
        super()
        this.actionProvider = actionProvider;
        this.state = state
    }

    parse(message) {
        const lowercase = message.toLowerCase()
        console.log(this.state);

        if(lowercase.includes('hello')){
            this.actionProvider.helloHandler()
        }
        if(lowercase.includes('hi')){
            this.actionProvider.helloHandler()
        }
        if(lowercase.includes('i want to learn about plants' )){
            this.actionProvider.helpHandler()
        }
        if(lowercase.includes('watering')){
            this.actionProvider.waterHandler()
        }
        if(lowercase.includes('light')){
            this.actionProvider.waterHandler()
        }
        if(lowercase.includes('humidity')){
            this.actionProvider.waterHandler()
        }
        if(lowercase.includes('i want to know something')){
            this.actionProvider.moreHandler()
        }
        if(lowercase.includes('how do i not kill my plants?')){
            this.actionProvider.killHandler()
        }
        if(lowercase.includes('how do i choose a plant?')){
            this.actionProvider.chooseHandler()
        }
        if(lowercase.includes('when should i repot my plant?')){
            this.actionProvider.repotHandler()
        }
        if(lowercase.includes('air purifying plants')){
            this.actionProvider.airHandler()
        }
        if(lowercase.includes('houseplants toxic to kids and pets')){
            this.actionProvider.toxicHandler()
        }
        if(lowercase.includes('what is wrong with my houseplant?')){
            this.actionProvider.wrongHandler()
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default MessageParser