import React from 'react';
import {Link} from 'react-router-dom';

//Styles
import './styles/Navbar.css'
//Media
import logo from '../images/logo.svg'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img className="image-fluid" src={logo} alt="Logo" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar