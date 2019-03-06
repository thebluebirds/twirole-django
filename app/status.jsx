import React from 'react';
import { connect } from 'react-redux';


/* Functional component that manages the loading spinner and error message */
function Status(props) {
    let content = (<p></p>);

    if (props.loading)
        content = (<p><img className="spinner" src="/static/loading.gif" /></p>);
    else if (props.error)
        content = (<p className="error">{ props.errorMessage }</p>);

    return content;
}


// Maps the store to variable in the props object
const mapStateToProps = function(state) {
    return {
        loading: state.app.status === 1,
        error: state.app.status === 2,
        errorMessage: state.app.errorMessage,
    };
}


// Connect to app state so we know when to display a loading spinner
export default connect(mapStateToProps)(Status);
