//Dev dependencies
import React from 'react';
import {Link} from 'react-router-dom';
//Styles
import './styles/Badges.css';
//Components
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
//Media
import badgesHeader from '../images/badge-header.svg';
//APIs
import api from '../api';

class Badges extends React.Component{

    constructor(props){
        super(props)
        this.state={
            loading: true,
            error:null,
            data: undefined,
        }

    }

    componentDidMount(){
        this.fetchData();

          this.intervalId = setInterval(this.fetchData, 5000);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
          const data = await api.badges.list();
          this.setState({ loading: false, data: data });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };
    

      componentWillUnmount(){
          clearInterval(this.intervalId)
      }

    render(){
        if(this.state.loading === true && !this.state.data) {
            return <PageLoading/>;
        }

        if (this.state.error){
            return <PageError error={this.state.error} />;
        }


        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={badgesHeader} alt="" 
                            className="Badges_conf-logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges conatiner">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" 
                        className="btn btn-primary mx-5">
                            New Badge
                        </Link>
                    </div>
                    
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">    
                        <BadgesList badges={this.state.data} />
                    {this.state.loading && <MiniLoader/>}
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;