'use strict';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/home';
import * as waitThingActions from '../../actions/waitThing';
import * as dataListActions from '../../actions/dataList';

import {ReactRouter,Link} from 'react-router';
import '../../style/index.less';
import WaitThing from './waitThing';
import DataList from './dataList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {current: 'home'};
    }
    componentDidMount() {
        const { dispatch} = this.props;
        dispatch(homeActions.getSildeList());
        dispatch(waitThingActions.getList());
        dispatch(dataListActions.getList());

    }

    render() {
        const {waitData} = this.props;
        return (
            <div className="container">
                <div className="modify-layout">
                   <WaitThing waitthing = {this.props.waitthing.waitData}/>
                   <DataList datalist = {this.props.datalist.dataList} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        waitthing: state.home.waitthing,
        datalist: state.home.datalist,
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);;
