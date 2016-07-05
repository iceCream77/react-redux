import * as dataListAction from '../../actions/dataList';

/*对页面prop 数据进行管理*/
const initialState = {
	dataList:{
		"orderNum":0,       
	  "orderAmount":0,
	  "boxApplyApprovedNum":0
	},
	isFetching: false
};
export default function waitting(state = initialState, action) {
	switch (action.type){
		case dataListAction.BEFORE_GET_DATALIST:
			return Object.assign({},state,{isFetching:true});
		case dataListAction.UPDATE_GET_DATALIST:
			return Object.assign({},state,{
				dataList:action.dataList
			})
		case dataListAction.AFTER_GET_DATALIST:
			return Object.assign({},state,{isFetching:false});
		default:
			return state;
	}
  return state
}
