import React from 'react';
import { connect } from 'react-redux';

import Chart from './chart.jsx';
import Classification from './classification.jsx';
import Actions from './actions.js';


/* Functional component that shows a result. */
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.removeResult = this.removeResult.bind(this);
    }

    removeResult() {
        this.props.dispatch({
            type: Actions.REMOVE_RESULT,
            index: this.props.key,
        });
    }

    render() {
        const profileImageUrl = `https://twitter.com/${this.props.data.username}/profile_image?size=original`

        return (
            <div className="card">
                <button className="remove-result" onClick={this.removeResult} title="Remove result">
                    <span className="fa fa-remove">&nbsp;</span>
                </button>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2 align-self-center">
                            <img className="profile-pic" src={profileImageUrl} />
                        </div>
                        <div className="col-sm-4 align-self-center">
                            <h3>@{ this.props.data.username }</h3>
                            <br />
                            <Classification data={this.props.data.hybrid} />
                        </div>
                        <div className="col-sm-6 align-self-center">
                            <Chart data={this.props.data.hybrid} />
                        </div>
                    </div>
                </div>
                <div className="card-body bg-light">
                    <div className="row">
                        <div className="col-sm-4">
                            <b>Basic</b>
                        </div>
                        <div className="col-sm-4">
                            <b>Advanced</b>
                        </div>
                        <div className="col-sm-4">
                            <b>Profile Picture</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Chart data={this.props.data.bf} />
                        </div>
                        <div className="col-sm-4">
                            <Chart data={this.props.data.af} />
                        </div>
                        <div className="col-sm-4">
                            <Chart data={this.props.data.cnn} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(() => {})(Result);
