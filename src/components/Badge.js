import React from 'react';

//Styles
import './styles/Badge.css'
//Media
import BadgeHeader from '../images/badge-header.svg'
import Gravatar from './Gravatar';

class Badge extends React.Component{
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={BadgeHeader} alt="" />
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                    email={this.props.email}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    className="Badge__avatar" />
                    <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <p>@{this.props.twitter}</p>
                </div>

                <div className="Badge__footer">
                    #PlatziConf
                </div>

            </div>
        )
    }
}

export default Badge