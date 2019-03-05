// assets/js/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Search from './search.jsx';
import ResultList from './result-list.jsx';
import Store from './store.js';


function App(props) {
    return (
        <div>
            <Search />
            <ResultList />
        </div>
    );
}

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('react-app'));
