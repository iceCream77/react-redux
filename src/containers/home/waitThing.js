'use strict';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import {ReactRouter,Link} from 'react-router';
import './index.less';
class WaitThing extends Component {
   
    render() {
        return (
            
            <div className="message-list-box">
                <h2><i className="wait-work"></i>待办事项</h2>
                <div className="message-list clearfix">
                    <div className="message-list-data ms-box-style relative">
                        <p><Link className="num" to="orders">{this.props.waitthing.waitOrderNum}</Link></p>
                        <p className="data-info">待处理订单</p>
                        <i href="javascript:;" className="down-bg r-order"></i>
                    </div>
                    <div className="message-list-data ms-box-style relative">
                        <p><a className="num" href="#snackbox/dispatch">{this.props.waitthing.waitPurchaseBoxNum}</a></p>
                        <p className="data-info">待配货零食盒子</p>
                        <i href="javascript:;" className="down-bg r-snack-box"></i>
                    </div>
                    <div className="message-list-data  ms-box-style relative">
                        <p><a className="num" href="#snackbox/apply">{this.props.waitthing.waitApplyBoxNum}</a></p>
                        <p className="data-info">待处理盒子申请</p>
                        <i href="javascript:;" className="down-bg r-snack-box"></i>
                    </div>

                    <div className="message-list-data  ms-box-style  no-mr relative j-cashier-into cashier-into">
                        <div className="iconfont">&#xe6a8;</div>
                        <p className="data-info">点击进入收银台</p>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default WaitThing;