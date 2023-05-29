import React from 'react'
import logo from './logoBack.jpg'
// import { NavLink } from 'react-router-dom';
import Common from './Common';
const About = () =>{
    return (<>
    <Common name='Welcome to About Page' visit='/contact' btnName = 'Contact Now' imgSrc={logo}/>
    </>)
}
export default About;