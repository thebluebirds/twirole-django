import React from 'react';
import { connect } from 'react-redux';

import { classifyUser } from './lib.js';
import Actions from './actions.js';


/* Component that handles username queries */
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { twitterUsername: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Update the state so we can keep track of changes in the username field
    handleChange(event) {
        this.setState({ twitterUsername: event.target.value });
    }

    // Handles when the form is submitted (the user wants to classify a twitter username)
    handleSubmit(event) {
        // Do not submit if the application is loading
        if (!this.props.loading) {
            classifyUser(this.state.twitterUsername, this.props.dispatch);
        }
        event.preventDefault();
    }

    render() {
        // Disable the input and button if the form is loading
        let input, button;
        if (this.props.loading) {
            input = <input disabled onChange={this.handleChange} type="text" className="form-control" placeholder="Twitter Handle" />;
            button = <button disabled className="btn btn-secondary">Classifying...</button>;
        } else {
            input = <input onChange={this.handleChange} type="text" className="form-control" placeholder="Twitter Handle" />;
            button = <button className="btn btn-primary">Classify user</button>;
        }

        return (
            <form id="classifyForm" onSubmit={this.handleSubmit}>
                <div className="input-group input-group-btn mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                    </div>
                    { input }
                    <div className="input-group-append">
                        { button }
                    </div>
                </div>
            </form>
        );
    }
}


function mapStateToProps(state) {
    return {
        loading: state.app.status === 1
    };
}


export default connect(mapStateToProps)(SearchForm);
