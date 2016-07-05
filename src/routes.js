'use strict';
import React from 'react';
import {Router, Route,Link, IndexRoute, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Layout from './layout/';

import HomePage from './containers/home/';
import ProductPage from './containers/product/';
function createElement(Component,props){
        return <Component {...props}/>
}
export default (store) => {
    const history = syncHistoryWithStore(hashHistory, store);

    
    return <Router history={history}  createElement = {createElement}>
        <Route path="/" component={Layout}  >
        	<IndexRoute hasLeft="true" component={HomePage}/>
        	<Route path="product" component={ProductPage}/>
          <Route path="*" component={HomePage}/>
        </Route>
    </Router>;
};
