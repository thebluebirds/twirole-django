import axios from 'axios';
import c3 from 'c3';

import Actions from './actions.js';

/*
    Function that builds the C3 chart configuration and attaches it to the corresponding
    DOM element with male, female, and brand percentages.
*/
function buildChart(id, percentages) {
    var chart = c3.generate({
        bindto: `#${id}`,
        data: {
            columns: [
                ['Male', 0],
                ['Female', 0],
                ['Brand', 0]
            ],
            type: 'bar',
            colors: {
                Male: '#0066CC',
                Female: '#FF6666',
                Brand: '#808080'
            },
            groups: [
                ['Male', 'Female', 'Brand']
            ],
            order: null
        },
        bar: {
            width: {
                ratio: 0.3
            }
        },
        transition: {
            duration: 500
        },
        tooltip: {
            show: false
        },
        axis: {
            x: { show: false },
            y: { show: false },
        },
        size: { width: 220, height: 320 },
        grid: {
            x: { show: false }
        },
        legend: {
            show: false
        }
        // title: {
        //     text: chartTitle
        // }
    });

    setTimeout(function() {
        chart.load({
            columns: [
                ['Male', percentages.male],
                ['Female', percentages.female],
                ['Brand', percentages.brand]
            ]
        });
    }, 500);

    return chart;
}

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

export { buildChart, classifyUser };
