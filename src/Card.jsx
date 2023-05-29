import React from 'react'
import { NavLink } from 'react-router-dom';
import logoProject from './Project.jpg'

const Card = (props) =>{
    return (<>
    
    <div className="col-md-4 col-10 mx-auto ">
    <div className="card " >       
            <img src={logoProject} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><strong>{props.title}</strong></h5>
                <p className="card-text">{props.desc}</p>
                <NavLink to={props.link} className="btn-get-started">Checkout Repo</NavLink>
            </div>
    </div>
    </div>
    
    </>);
}
export default Card;