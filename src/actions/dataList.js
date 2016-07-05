'use strict';

// constants 与 actions 在一起
import reqwest from 'reqwest';
import tools,{NameSpace} from '../util/index'
import apiMap from '../util/apimap'

let ns = NameSpace('DATALIST');
export const BEFORE_GET_DATALIST = ns('BEFORE_GET_DATALIST');
export const UPDATE_GET_DATALIST = ns('UPDATE_GET_DATALIST');
export const AFTER_GET_DATALIST = ns("AFTER_GET_DATALIST");


/*
获取slide广告图list
*/
export function beforeGetList(){
    return {
        type: BEFORE_GET_DATALIST
    };
}
export function getList() {
    return function (dispatch) {
        dispatch(beforeGetList());
        tools.fetchData({api:"dataProfiles"}, function (json) {
            dispatch(updateList(json.data));
        }).always(() => {
            dispatch(afterGetList());
        });

    }
}

export function updateList(items) {
    return {
        type: UPDATE_GET_DATALIST, dataList: items
    };
}

export function afterGetList() {
    return {
        type: AFTER_GET_DATALIST
    };
}