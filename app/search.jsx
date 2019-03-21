import React from 'react';
import { connect } from 'react-redux';

import SearchForm from './search-form.jsx';
import Status from './status.jsx';


/* Functional component that handles username queries. Also contains the status. */
function Search(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-8">
                    <SearchForm />
                </div>
                <div className="col-lg-4 col-sm-4">
                    <Status />
                </div>
            </div>
        </div>
    );
}


export default connect(() => {})(Search);
