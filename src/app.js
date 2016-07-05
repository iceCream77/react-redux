
var wrap=document.createElement('div');
document.body.appendChild(wrap);

import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import createRoute from './routes';
import createStore from './store/'
import reducers from './reducers/';


const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        {createRoute(store)}
    </Provider>,
    wrap
);


