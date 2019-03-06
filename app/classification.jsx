import React from 'react';

/*
    Functional component that, given a hybrid classification object, returns the correct
    classification as a <span> tag. See twirole.css for the styling.
*/
function Classification(props) {
    let classif = "";
    const max = Math.max(props.data.male, Math.max(props.data.female));

    // Handle cases where user falls into multiple groups
    if (props.data.male == props.data.female && props.data.female == props.data.brand) {
        classif = (<h4><span className="brand">Unknown</span></h4>);
    } else if (max == props.data.male && props.data.male == props.data.female) {
        classif = (<h4><span className="male">Male</span> or <span className="female">Female</span></h4>);
    } else if (max == props.data.male && props.data.male == props.data.brand) {
        classif = (<h4><span className="male">Male</span> or <span className="brand">Brand</span></h4>);
    } else if (max == props.data.female && props.data.female == props.data.brand) {
        classif = (<h4><span className="female">Female</span> or <span className="brand">Brand</span></h4>);
    } else if (max == props.data.male) {
        classif = (<h4><span className="male">Male</span></h4>);
    } else if (max == props.data.female) {
        classif = (<h4><span className="female">Female</span></h4>);
    } else if (max == props.data.brand) {
        classif = (<h4><span className="female">Brand</span></h4>);
    }

    return classif;
}


export default Classification;
