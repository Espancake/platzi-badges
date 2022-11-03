import React from 'react';
//Components
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
//Styles
import './styles/BadgeEdit.css';
//Media
import hero from '../images/platziconf-logo.svg';
//APIs
import api from '../api';

class BadgeEdit extends React.Component{
    state={
        loading:true,
        error:null,
        form:{
            firstName: 'j',
            lastName: 'j',
            email: 'j',
            jobTitle: 'j',
            twitter: 'j',

        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e=>{
        this.setState({ loading: true, error:null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({loading:false, form: data,})
            console.log(this.state.form)
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    };



    //This is for handling the post Request of the submit from BadgeNew
    handleSubmit= async e =>{
        e.preventDefault()
        this.setState({loading: true, error:null})
        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading: false});

            this.props.history.push('/badges');
        } catch (error){
            this.setState({loading: false, error: error })
        }
    };

    //This is the handler of the state for the form on BadgeForm
    handleChange =e=>{
        this.setState({
            form:{
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    };


    render(){
        if(this.state.loading){
            return <PageLoading/>
        }

        return(
            <React.Fragment>

                <div className="BadgeEdit__hero">
                    <img src={hero} alt="" className="BadgeEdit__hero-image" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            email={this.state.form.email || 'EMAIL'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            twitter={this.state.form.twitter || 'Twitter'}
                            />
                            </div>
                        <div className="col-6">
                        <h1>Edit attendant</h1>
                            <BadgeForm
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit