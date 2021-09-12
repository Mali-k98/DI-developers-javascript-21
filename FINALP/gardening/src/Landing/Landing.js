import NavBar from '../Landing/NavBar'
import PlantI from '../Landing/PlantI';
import BlogDirection from './BlogDirection'
import Nurseries from '../Landing/Nurseries';
import React from 'react';
import Contact from '../Landing/Contact';

class Landing extends React.Component {


render(){
return (
    <>

    <div className='rooter'>
    <NavBar/>
    </div>
    <div className='landCards'>
    <PlantI/>
    <Nurseries/>
    <BlogDirection/>
    </div>
    <Contact/>
    </>
);
}
}

export default Landing;