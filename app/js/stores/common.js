'use strict';

const Action = require('../actions/common.js');
import { combineReducers, createStore } from 'redux';

function reducer(state = {}, action) {
    switch (action.type) {
        case Action.types.setDrawer:{
            state.drawerStatus = action.status;
            return Object.assign({},state);
        }
        case Action.types.setLists:{
            state.GridLists = action.lists;
            return Object.assign({},state);
        }
        default:return state;
    }
}
let reducers = combineReducers({ reducer });

module.exports = createStore(reducers);
