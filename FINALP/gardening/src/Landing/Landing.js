import NavBar from '../Landing/NavBar'
import PlantI from '../Landing/PlantI';
import BlogDirection from './BlogDirection'
import Nurseries from '../Landing/Nurseries';
import About from '../About/About';
import Contact from '../Landing/Contact';

import React, { useRef } from 'react'
import Help from '../Chatbot/Help';
import { scroller } from "react-scroll";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Landing =()=>{
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    const scrollToSection = () => {
        scroller.scrollTo("about", {
        duration: 100,
        delay: 0,
        smooth: "easeInOutQuart",
    });
    };

return (
    <>
    <NavBar executeScroll={executeScroll} scrollToSection={scrollToSection}/>
    <div className='rooter'>
    <Help/>
    </div>
    <div className='landCards'>
    <PlantI/>
    <Nurseries/>
    <BlogDirection/>
    </div>
    <About myRef={myRef}/>
    <Contact myRef={myRef}/>
    </>
);
}


export default Landing;