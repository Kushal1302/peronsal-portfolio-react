import React from 'react'
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import Contact from './Contact';
import Project from './Project';
import Home from './Home';
import { Routes , Route} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
const App = () =>{
  return (<>
<Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
   <Route path='/contact' Component={Contact}/>
   <Route path='/project' Component={Project}/>
   <Route path='/about' Component={About}/>
</Routes>
<Footer/>
  
  
  </>)
}
export default App;