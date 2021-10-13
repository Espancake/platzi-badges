import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './styles/BadgesList.css'
//Media 
import twitterLogo from '../images/twitter.png'
//Components
import Gravatar from './Gravatar';


class BadgesListItem extends React.Component{
    render(){
        return(
            <div className="BadgesListItem">
                <Gravatar 
                className="BadgesListItem__avatar"
                email={this.props.badge.email}
                />
                <div>
                    <strong>{this.props.badge.firstName} {this.props.badge.lastName}</strong>
                    <br />
                   <span className="BadgesListItem__twitter">
                        <img src={twitterLogo} alt="" className="twitter"/>
                        @{this.props.badge.twitter}
                    </span> 
                    <br />
                    <span>
                        {this.props.badge.jobTitle}
                    </span>
                </div>
            </div>
        )
    }
}


function useSearchBadges(badges){
    const [query, setQuery]= React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)
    
    
    React.useMemo(
        ()=> {
            const result = badges.filter((badge)=>{
      return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
    });

    setFilteredBadges(result)

}, [badges, query]);
 
return {query, setQuery, filteredBadges}
}


function BadgesList (props){
        const badges = props.badges;

       const{query, setQuery, filteredBadges} = useSearchBadges(badges)

        if(filteredBadges.length === 0){
            return(
                
                <div>
                    <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control mb-3" 
                    value={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                    />
                </div>
                    <h3>No Badges Were Found.</h3>
                    <Link to="/badges/new" className="btn btn-primary">Create New Badge</Link>
                </div>
            )
        }
        return(
            <div className="Badges__list">
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control mb-3" 
                    value={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                    />
                </div>
                        <ul className="list-unstyled">
                            {filteredBadges.map((badge)=>{
                                return(
                                <li key={badge.id}>
                                    <Link to={`/badges/${badge.id}/edit`} 
                                    className="text-reset text-decoration-none">
                                        <BadgesListItem badge={badge}/>                  
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
        )
    }

export default BadgesList;