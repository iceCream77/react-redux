'use strict';

import api from './apimap';
import Reqwest from 'reqwest';


var tools = {
    /*
     * 调用改核心方法 统一接口处理
     * */
    fetchData: function (param, suc = ()=> {
    }, err = ()=> {
    }) {

        var self = this;
        if (this.isString(param)) {
            param = {api: param};
        }
        var arrApi = api.getapi(param.api);

        param.url = param.url || arrApi[0];
        param.method = param.method || arrApi[1];
        param.type = param.type || 'json';
        if (param.method === 'jsonp') {
            param.method = 'get';
            param.type = 'jsonp';
        }
        param.success = function (res = {}) {
            if(res.status == 101){
                window.location.href="/dormweb-dormapi/user/login";
            }else{
                suc(res);
            }
            
        };
        param.error = function (error) {
            err(error);
        };
        return Reqwest(param);
    },
    getToken() {
        var $token = document.getElementsByName('_tb_token_');
        return $token.length ? $token[0].value : '';
    },
    isDaily(){
        var host = window.location.host;
        return host.indexOf('daily') > -1;
    },

    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    isArray: function (object) {
        return object instanceof Array
    },
    isWindow: function (obj) {
        return obj != null && obj == obj.window
    },
    isDocument: function (obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE
    },
    isObject: function (obj) {
        return this._type(obj) == "object"
    },
    isFunction: function (fn) {
        return this._type(fn) == "function"
    },
    isPlainObject: function (obj) {
        return this.isObject(obj) && !this.isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
    },
    _type: function (obj) {
        var class2type = {};
        var toString = class2type.toString;
        return obj == null ? String(obj) :
        class2type[toString.call(obj)] || "object"
    },
    isString: function (str) {
        return typeof str === 'string'
    },
    extend: function (target, source) {
        target = target || {};
        source = source || {};
        for (var key in source) {
            target[key] = source[key]
        }
        return target;

    },
    namespace: function (name) {
        return function (v) {
            return name + '-' + v;
        }
    }
    ,
    /**
     * 将Tag字符串分隔成数组
     * @param tags
     * @returns {Array.<T>}
     */
    tagsToArray(tags, splitChar = "+") {
        var arr = tags.split(splitChar);
        return arr.slice(1, Math.max(arr.length - 1), 2);
    },
    /**
     * 在数组中添加/删除制定元素值
     * @param arr
     * @param item
     * @returns {*}
     */
    toggleArray(arr, item){
        var idx = arr.indexOf(item);
        if (idx > -1) {
            arr.splice(idx, 1);
        } else {
            arr.push(item);
        }
        return arr;
    }
};

export const NameSpace = tools.namespace.bind(tools);
export const Ajax = tools.fetchData.bind(tools);
export default tools;
