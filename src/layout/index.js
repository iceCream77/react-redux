import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ReactRouter,Link } from 'react-router';
import _ from 'lodash';

import Header from '../components/header/index';

const overAll = ['sd','page','home']

export class Layout extends React.Component {
    render() {
        const pageName = this.props.params.splat;
        const isLeftNav = _.indexOf(overAll,pageName) == -1 ? true : false ;
        let LayoutEle ;
        if(isLeftNav == -1){
            LayoutEle = (
                <div>
                    <div className="left-menu">
                        <Link to="index">首页</Link>
                    </div>
                    <div className="right-content" router={ReactRouter}>
                        {this.props.children}
                    </div>
                </div>
            )
        }else{
           LayoutEle = (
                <div className="">
                    {this.props.children}
                </div>
            )
        }
        return (
            <div className="page-wrapper">
                <div className="main-content">
                    <Header pageName = {pageName}/>
                    {LayoutEle}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        router: state.router
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Layout);
