import React from 'react'
import Navbar from '../Landing/NavBar'
import Chatbot from 'react-chatbot-kit'

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Help() {
    return (
        <>
        <Navbar/>
        <div style={{marginLeft:'40vw',marginTop:'10px'}}> 
            <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
        </div>
        </>
    )
}

export default Help
