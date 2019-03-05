import React from 'react';
import { connect } from 'react-redux';


/* Functional component that shows a result. */
function Result(props) {
    return (
        <div className="row">
            <div className="col-sm-2">
                Picture
            </div>
            <div className="col-sm-10">
                { props.data.username }
            </div>
        </div>
    );
}


// export default connect(() => {})(Result);
export default Result;
