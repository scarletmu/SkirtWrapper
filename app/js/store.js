'use strict';

const Action = require('./action.js');
import { combineReducers, createStore } from 'redux';

function reducer(state = {}, action) {
    switch (action.type) {
    default:
        return state;
    }
}
let reducers = combineReducers({ reducer });

module.exports = createStore(reducers);
