import axios from 'axios';
import c3 from 'c3';

import Actions from './actions.js';

/*
    Function to classify a user.
*/
function classifyUser(twitterUsername, dispatch) {
    const requestBody = {
        query: `{
            classify(handle: "${twitterUsername}") {
                bf { male, female, brand },
                af { male, female, brand },
                cnn { male, female, brand },
                hybrid { male, female, brand }
            }
        }`
    };

    const config = {
        headers: {
            'X-CSRFToken': window.csrf_token,
        }
    };

    // Dispatch that we are classifying a user
    dispatch({
        type: Actions.CLASSIFY_USER,
        query: twitterUsername,
    });

    // Make an AJAX call to the API
    axios.post('/api/', requestBody, config)
        .then((response) => {
            // console.log(response);
            const classification = response.data.data.classify;
            classification.username = twitterUsername;
            dispatch({
                type: Actions.SHOW_RESULT,
                result: classification,
            });
        }).catch((error) => {
            console.log(error);
            dispatch({
                type: Actions.ERROR,
                errorMessage: `Could not classify @${twitterUsername}`,
            });
        });
}

export { classifyUser };
