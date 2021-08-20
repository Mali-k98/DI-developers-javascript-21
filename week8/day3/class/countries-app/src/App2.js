import Home from "./compondent.js/Home";
import About from "./compondent.js/About";
import Contact from "./compondent.js/Contact";
import Nav2 from "./compondent.js/Nav2";
import React from "react";
import {Switch, Route} from 'react-router-dom'


const App = ()=>{
    return(
        <>
        <Nav2/>
        <Switch>
            <Route path='/' exact children={<Home/>}/>
            <Route path='/home' exact children={<Home/>}/>
            <Route path='/about' exact children={<About/>}/>
            <Route path='/contact' exact children={<Contact/>}/>
        </Switch>
        </>
    )
}

export default App