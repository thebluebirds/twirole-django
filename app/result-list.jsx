import React from 'react';
import { connect } from 'react-redux';

import Result from './result.jsx';


/* Functional component that shows a result. */
class ResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let results = [];

        for (let i = 0; i < this.props.results.length; i++) {
            results.push(<Result key={i} data={this.props.results[i]} />);
        }

        return (
            <div className="container">
                { results }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        results: state.app.results,
    }
};

export default connect(mapStateToProps)(ResultList);
