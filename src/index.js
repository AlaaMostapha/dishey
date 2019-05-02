import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './loginAndSignup/_helpers';

// setup fake backend
import { configureFakeBackend } from './loginAndSignup/_helpers/fake-backend';
configureFakeBackend();

ReactDOM.render( <Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
