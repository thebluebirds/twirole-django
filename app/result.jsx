import React from 'react';
import { connect } from 'react-redux';

import Chart from './chart.jsx';


/* Functional component that shows a result. */
class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2 align-self-center">
                            Picture
                        </div>
                        <div className="col-sm-4 align-self-center">
                            <strong>@{ this.props.data.username }</strong>
                        </div>
                        <div className="col-sm-6">
                            <Chart data={this.props.data.hybrid} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            Basic
                        </div>
                        <div className="col-sm-4">
                            Advanced
                        </div>
                        <div className="col-sm-4">
                            Profile Picture
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


export default Result;
