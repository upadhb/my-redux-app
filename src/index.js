import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import './styles/styles.css';   // We can use Webpack to import CSS files!!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
render (
    <Provider store = {store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);