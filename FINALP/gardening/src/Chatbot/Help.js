import React,{useState} from 'react'
import Navbar from '../Landing/NavBar'
import Chatbot from 'react-chatbot-kit'
import chive from '../lp-images/chive.jpg'

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Help() {
    const [click,setClick]=useState(false)
    
    const handleClick=(e)=>{
        e.preventDefault(
        
        setClick(true)
    )
    }
    
    const returnClick=(e)=>{
        e.preventDefault(
        
        setClick(false)
    )
    }

    if(click===true){
    return (
        <>
        <div style={{marginLeft:'65vw',marginTop:'10px'}}> 
        <button className='chive' onClick={returnClick}><img style={{height:'15vh',borderRadius:'50%'}} src={chive}/></button>
            
            <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
            
        </div>
        </>
    )
    }else{
    return(
        <>
            {/* <Navbar/> */}
            
            <button className='chive' onClick={handleClick}><img style={{height:'15vh',borderRadius:'50%'}} src={chive}/></button>
        
        </>
        )
}
}

export default Help
