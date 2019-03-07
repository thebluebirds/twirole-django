import React from 'react';

/*
    Functional component that, given a hybrid classification object, returns the correct
    classification as a <span> tag. See twirole.css for the styling.
*/
function Classification(props) {
    let classif = "";
    const max = Math.max(props.data.male, Math.max(props.data.female, props.data.brand));

    // Handle cases where user falls into multiple groups
    if (props.data.male == props.data.female && props.data.female == props.data.brand) {
        classif = (<span className="brand">Unknown</span>);
    } else if (max == props.data.male && props.data.male == props.data.female) {
        classif = (<span><span className="male">Male</span> or <span className="female">Female</span></span>);
    } else if (max == props.data.male && props.data.male == props.data.brand) {
        classif = (<span><span className="male">Male</span> or <span className="brand">Brand</span></span>);
    } else if (max == props.data.female && props.data.female == props.data.brand) {
        classif = (<span><span className="female">Female</span> or <span className="brand">Brand</span></span>);
    } else if (max == props.data.male) {
        classif = (<span className="male">Male</span>);
    } else if (max == props.data.female) {
        classif = (<span className="female">Female</span>);
    } else if (max == props.data.brand) {
        classif = (<span className="brand">Brand</span>);
    }

    return <h4>{ classif }</h4>;
}


export default Classification;
