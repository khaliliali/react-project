import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/stylesheet.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
