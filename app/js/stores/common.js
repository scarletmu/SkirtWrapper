'use strict';

const Action = require('../actions/common.js');
import { combineReducers, createStore } from 'redux';

function reducer(state = {}, action) {
    switch (action.type) {
    default:
        return state;
    }
}
let reducers = combineReducers({ reducer });

module.exports = createStore(reducers);
