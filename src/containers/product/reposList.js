'use strict';
import React,{Component} from 'react';
import { Table, Icon } from 'antd';

import Operartion from './oprBtn';




	

class ReposList extends Component {


	constructor (props,context){


		super(props,context)
		this.state = {

		}
	}

	render(){
		const columns = [{
		  title: '商品编号',
		  dataIndex: 'rid',
		  key: 'rid',
		  className:'rid',
		  render: (text) => <a href="#">{text}</a>,
		}, {
		  title: '商品名称',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '平台供货价（元）',
		  dataIndex: 'purchase_price',
		  key: 'purchase_price',
		}, {
		  title: '平台返利比例',
		  dataIndex: 'rebate',
		  key: 'rebate',
		}, {
		  title: '平台返利金额（元）',
		  dataIndex: 'rebate_amount',
		  key: 'rebate_amount',
		}, {
		  title: '自主设定零售价（元）',
		  dataIndex: 'price',
		  key: 'price',
		}, {
		  title: '实际利润（元）',
		  dataIndex: 'actual_profit',
		  key: 'actual_profit',
		}, {
		  title: '实际返利比例',
		  dataIndex: 'actual_rebate',
		  key: 'actual_rebate',
		}, {
		  title: '系统库存	',
		  dataIndex: 'stock',
		  key: 'stock',
		}, {
		  title: '商品价值（元）',
		  dataIndex: 'worth',
		  key: 'worth',
		}, {
		  title: '操作',
		  key: 'operation',
		  className:'operation',
		  render: (text, record) =>
		  (

			  <Operartion record={record} changeStatus={this.props.changeStatus} />
			),
		}];

		const {repos} = this.props; 
		return (
				<Table rowKey={record => record.rid} columns={columns} dataSource={repos.data.repos} pagination={false}/>

		)
	}
}

export default ReposList;