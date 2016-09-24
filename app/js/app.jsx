import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
const Action = require('./actions/common.js');
const Store = require('./stores/common.js');

import Test from './compoments/Test.jsx';
import Main from './page/main.jsx';
import About from './page/about.jsx';


const App = () => (
  <MuiThemeProvider>
    <Test />
  </MuiThemeProvider>
);

const ConnectedApp = connect(state => state)(App);

ReactDOM.render(
    <Provider store={ Store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ ConnectedApp }>
                <IndexRoute page="#/main" component={ Main }/>
                <Route path="#/about" component={ About }/>
            </Route>
        </Router>
    </Provider>, 
    document.querySelector('#container')
);