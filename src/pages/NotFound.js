import React from 'react'
import {Link} from 'react-router-dom';
//Styles
import './styles/NotFound.css'
//Media
import astronaut from '../images/astronauta.png'


class NotFound extends React.Component{
    render(){
        return(
            <div className="notfound">
                <div className="container-fluid">
                    <div className="row">
                        <div className="astro__col2">
                            <img src={astronaut} alt="" />
                        </div>
                        <div className="nf__col col-12 col-md-6">
                            <h1>
                                404 Not Found
                            </h1>
                            <Link to="/" className="btn btn-primary"> <strong>Go Home</strong></Link>
                        </div>
                        <div className="astro__col col-6">
                            <img src={astronaut} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound