import * as homeAction from '../../actions/waitThing';

/*对页面prop 数据进行管理*/
const initialState = {
	waitData:{
		"waitOrderNum":0,       
	  "waitPurchaseBoxNum":0,
	  "waitApplyBoxNum":0
	},
	isFetching: false
};
export default function waitting(state = initialState, action) {
	switch (action.type){
		case homeAction.BEFORE_GET_WAITTHING:
			return Object.assign({},state,{isFetching:true});
		case homeAction.UPDATE_GET_WAITTING:
			return Object.assign({},state,{
				waitData:action.waitData
			})
		case homeAction.AFTER_GET_WAITTING:
			return Object.assign({},state,{isFetching:false});
		default:
			return state;
	}
  return state
}
