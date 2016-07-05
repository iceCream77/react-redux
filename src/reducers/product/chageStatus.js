import * as dataListAction from '../../actions/repos';

/*对页面prop 数据进行管理*/
const initialState = {
	data:{
		"offline_num":0,
		"online_num":0,
		"prodNum":0,
		repos:[],
		"stockout_num":0,
		"total_worth":0
	},
	isFetching: false
};
export default function reposList(state = initialState, action) {
	switch (action.type){
		case dataListAction.BEFORE_GET_REPOS:
			return Object.assign({},state,{isFetching:true});
		case dataListAction.UPDATE_GET_REPOS:
			return Object.assign({},state,{
				data:action.data
			})
		case dataListAction.AFTER_GET_REPOS:
			return Object.assign({},state,{isFetching:false});
		default:
			return state;
	}
  return state
}
