'use strict';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import {ReactRouter,Link} from 'react-router';
import '../../style/index.less';

import * as reposActions from '../../actions/repos';
import ReposList from './reposList';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {current: 'home'};
    }
    componentDidMount() {
        const { dispatch} = this.props;
        dispatch(reposActions.getList({shop_type:0,status:99}));
    }
    changeStatus (fetchData){
        const { dispatch} = this.props;
        dispatch(reposActions.chanageStatus(fetchData));
    }

    render() {
        const {product} = this.props;
        return (
            <section className="table-box">
               <ReposList repos = {product.repos} changeStatus = {this.changeStatus.bind(this)}/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product,
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);;
