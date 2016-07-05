'use strict';

// constants 与 actions 在一起
import reqwest from 'reqwest';
import tools,{NameSpace} from '../util/index'
import apiMap from '../util/apimap'

let ns = NameSpace('REPOS');
export const BEFORE_GET_REPOS = ns('BEFORE_GET_REPOS');
export const UPDATE_GET_REPOS = ns('UPDATE_GET_REPOS');
export const AFTER_GET_REPOS = ns("AFTER_GET_REPOS");

export const AFTER_CHANGE_STATUS = ns("AFTER_CHANGE_STATUS");

/*
获取slide广告图list
*/
export function beforeGetList(){
    return {
        type: BEFORE_GET_REPOS
    };
}
export function getList(datafetch) {
    return function (dispatch) {
        let data = {};
        data = Object.assign({},data,datafetch);
        dispatch(beforeGetList());
        tools.fetchData({data:data,api:"repos"}, function (json) {
            dispatch(updateList(json.data));
        }).always(() => {
            dispatch(afterGetList());
        });

    }
}

export function updateList(items) {
    return {
        type: UPDATE_GET_REPOS, data: items
    };
}

export function afterGetList() {
    return {
        type: AFTER_GET_REPOS
    };
}

export function chanageStatus(datafetch){
    return function (dispatch) {
        let data = {};
        data = Object.assign({},data,datafetch);
        tools.fetchData({data:data,api:"reposStatus"}, function (json) {
            dispatch(afterChangeStatus(json.data));
        })

    }
}
export function afterChangeStatus(item){
    return {
        type:AFTER_CHANGE_STATUS,item
    }
}