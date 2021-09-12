import React from 'react'
import {createChatBotMessage} from 'react-chatbot-kit'
import BotAvatar from './BotAvatar'
import Options2 from './options/Options2'
import Options1 from './options/Options1'
import Options3 from './options/Options3'


    const config = {
        initialMessages: [createChatBotMessage(`Welcome to our website! Hello!`)],
        botName:'Chia',
        customComponents:{
            botAvatar: (props)=><BotAvatar {...props}/>
        },
        customStyles:{
            botMessageBox:{
                backgroundColor: '#65b473'
            },
            chatButton:{
                backgroundColor: '#65b473'
            }
        },
        // state:{
        //     plantNames:['mint','tulips']
        // },
        widgets: [
            {
                widgetName: "options1",
                widgetFunc: (props) => <Options1 {...props} />
            },
            {
                widgetName: 'options2',
                widgetFunc : (props)=> <Options2 {...props}/>
            },
            {
                widgetName: 'options3',
                widgetFunc: (props)=> <Options3 {...props}/>
            }
        ]
    }


export default config
