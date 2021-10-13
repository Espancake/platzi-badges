import React from 'react';


class BadgeForm extends React.Component{

    render(){
        return(
            <div>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        onChange={this.props.onChange}
                        value={this.props.formValues.firstName} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        type="text"
                        className="form-control"
                        name="lastName"
                        onChange={this.props.onChange}
                        value={this.props.formValues.lastName} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                        className="form-control"
                        name="email"
                        onChange={this.props.onChange}
                        value={this.props.formValues.email} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input type="text"
                        className="form-control"
                        name="jobTitle"
                        onChange={this.props.onChange}
                        value={this.props.formValues.jobTitle} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input type="text"
                        className="form-control"
                        name="twitter"
                        onChange={this.props.onChange}
                        value={this.props.formValues.twitter} 
                        />
                    </div>
                    <button className="btn btn-primary mt-3">Save</button>

                    {this.props.error && (
                        <p className="text-danger">
                            {this.props.error.message}
                        </p>
                    )}

                </form>
            </div>
        )
    }
}

export default BadgeForm;