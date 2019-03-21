import { createStore, combineReducers } from 'redux';
import Actions from './actions.js';

// The initial state of the application
const initialState = {
    app: {
        status: 0,
        errorMessage: '',
        query: '',
        results: [],
    }
};

// Reducers for actions that are dispatched to the store
const reducers = function (state, action) {
    const newState = {};

    console.log(action);

    if (action.type === Actions.CLASSIFY_USER) {
        newState.status = 1;
        newState.query = action.query;
    } else if (action.type === Actions.ERROR) {
        newState.status = 2;
        newState.errorMessage = action.errorMessage;
    } else if (action.type === Actions.SHOW_RESULT) {
        newState.status = 0;
        newState.results = [...state.results, action.result];
    } else if (action.type === Actions.REMOVE_RESULT) {
        newState.status = 0;
        newState.results = [...state.results];
        newState.results.splice(action.index, 1);
    }

    console.log(newState);

    return Object.assign({}, state, newState);
};


// The application store, which is exported
const Store = createStore(combineReducers({ app: reducers }), initialState);
export default Store;
