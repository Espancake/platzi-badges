import React from 'react';
import {Link} from 'react-router-dom';

//Stytles
import './styles/Home.css'
//Media
import platziConfLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                           <img src={platziConfLogo}
                           alt="PlatziConf Logo" 
                           className="image-fluid mb-3" />
                           <h1 className="fw-light">PRINT YOUR BADGES</h1>
                           <h4>
                               The easiest way to manage your conference
                           </h4>
                           <Link to="/badges" className="btn btn-primary">Start Now</Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8 p-5">
                            <img src={astronauts} alt="" className="img-fluid p-4" />
                        </div>
                    </div>
                </div>       
            </div>
        )
    }
}

export default Home;