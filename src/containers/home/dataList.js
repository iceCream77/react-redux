'use strict';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import {ReactRouter,Link} from 'react-router';
import './index.less';
class dataList extends Component {
   
    render() {
        return (
            <div className="message-list-box">
            <h2><i className="data-survey"></i>数据概况</h2>
            <div className="message-list clearfix">
                <div className="message-list-data ms-box-style relative">
                    <div className="title">
                        <span>订单数</span>
                        <a href="#datacenter/sell" className="color">更多
                            <span className=""></span>
                        </a>
                    </div>
                    <p><a className="num data" href="#datacenter/sell">{this.props.datalist.orderNum}</a><span>单</span></p>
                    <p className="data-info">今日订单数</p>
                </div>
                <div className="message-list-data ms-box-style  relative">
                    <div className="title"><span>交易额</span><a href="#datacenter/sell" className="color">更多 </a></div>
                    <p><a className="money data" href="#datacenter/sell">{'￥'+(this.props.datalist.orderAmount || 0).toFixed(2)}</a></p>
                    <p className="data-info">今日交易额</p>
                </div>
                <div className="message-list-data ms-box-style  relative no-mr">
              <div className="title"><span>盒子数</span><a href="#snackbox" className="color">更多 </a></div>
              <p><a className="num data" href="#snackbox">{this.props.datalist.boxApplyApprovedNum}</a><span>个</span></p>
              <p className="data-info">零食盒子已开通数量</p>
              <i href="javascript:;" className="down-bg r-snack-box"></i>
            </div>
            </div>
        </div>
        )
    }
}


export default dataList;