'use strict';

// constants 与 actions 在一起
import reqwest from 'reqwest';
import tools,{NameSpace} from '../util/index'
import apiMap from '../util/apimap'

let ns = NameSpace('HOME');
export const GET_DATA = ns('GET_DATA');
export const UPDATE_DATA = ns('UPDATE_INFO');


export const BEFORE_GET_SLIDES = ns("BEFORE_GET_SLIDES");
export const UPDATE_GET_SLIDES = ns("UPDATE_GET_SLIDES");
export const AFTER_GET_SLIDES = ns("AFTER_GET_SLIDES");

export function getAsyncData(data){
	return (dispatch) => {
		Ajax({api: 'index',data: data || {}},function(json){
			dispatch({
                type : GET_DATA,
                data : json
            })
		})
	}
}

/*
获取slide广告图list

*/
export function beforeSildeList() {
    return {
        type: BEFORE_GET_SLIDES
    };
};

export function getSildeList() {
    return function (dispatch) {
        dispatch(beforeSildeList());
        tools.fetchData({api:"slideList"}, function (json) {
            dispatch(updateSildeList(json.data));
        }).always(() => {
            dispatch(afterSildeList());
        });

    }
}

export function updateSildeList(items) {
    return {
        type: UPDATE_GET_SLIDES, items: items
    };
}

export function afterSildeList() {
    return {
        type: AFTER_GET_SLIDES
    };
}