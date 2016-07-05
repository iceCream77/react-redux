import * as homeAction from '../../actions/home';

/*对页面prop 数据进行管理*/
const initialState = {
	slides:[],
	isFetching: false
};
export default function waitting(state = initialState, action) {
	switch (action.type){
		case homeAction.BEFORE_GET_SLIDES:
			return Object.assign({},state,{isFetching:true});
		case homeAction.UPDATE_GET_SLIDES:
			return Object.assign({},state,{
				slides:{action.slides}
			})
		case homeAction.AFTER_GET_SLIDES:
			return Object.assign({},state,{isFetching:false});
		default:
			return state;
	}
  return state
}
