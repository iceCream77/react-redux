'use strict';
import React,{Component} from 'react';

import * as reposActions from '../../actions/repos';

class Operartion extends Component {


	constructor (props,context){


		super(props,context)
		this.state = {

		}
	}
	changeStatus (){
		let fetchData = {
			status:Math.abs(1-parseInt(this.props.record.status)),
			item_id:this.props.record.item_id
		}
		this.props.changeStatus(fetchData)
	}
	render(){
		let eleA,
			record = this.props.record || {}
		if(record.status == 0){
			eleA = <a href="javascript:;" className="color-orange"  record = {record} onClick={this.changeStatus.bind(this)}>下架</a>
		}else{
			eleA = <a href="javascript:;">上架</a>
		}
		return (
			<span>
				{eleA}
			</span>
			
		)
	}
}

export default Operartion;