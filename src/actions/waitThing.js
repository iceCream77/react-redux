'use strict';

// constants 与 actions 在一起
import reqwest from 'reqwest';
import tools,{NameSpace} from '../util/index'
import apiMap from '../util/apimap'

let ns = NameSpace('WAITTING');
export const BEFORE_GET_WAITTHING = ns('BEFORE_GET_WAITTHING');
export const UPDATE_GET_WAITTING = ns('UPDATE_GET_WAITTING');
export const AFTER_GET_WAITTING = ns("AFTER_GET_WAITTING");


/*
获取slide广告图list
*/
export function beforeGetList(){
    return {
        type: BEFORE_GET_WAITTHING
    };
}
export function getList() {
    return function (dispatch) {
        dispatch(beforeGetList());
        tools.fetchData({api:"backlog"}, function (json) {
            dispatch(updateList(json.data));
        }).always(() => {
            dispatch(afterGetList());
        });

    }
}

export function updateList(items) {
    return {
        type: UPDATE_GET_WAITTING, waitData: items
    };
}

export function afterGetList() {
    return {
        type: AFTER_GET_WAITTING
    };
}