import React from 'react'
import logo from './logoBack.jpg'
// import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () =>{
    return (<>
    <Common name='Hello This is ' brandName='Kushal Kumar' btnName ='Get Started' visit='/project' imgSrc = {logo}/>
    </>)
}
export default Home;