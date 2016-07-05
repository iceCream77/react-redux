'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './home/';
import product from './product/';


const rootReducer = combineReducers({
    home,
    product,
    routing: routerReducer
});
export default rootReducer;
