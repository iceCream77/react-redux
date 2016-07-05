import tools from './index'

var apiMap = {
    apiconfig: {
        slideList: ['/dormweb-dormapi/dorm/pcSlideList', 'get'],
        backlog:['/dormweb-dormapi/dorm/backlog', 'get'],
        dataProfiles:['/dormweb-dormapi/dorm/dataProfiles', 'get'],
        repos:['/dormweb-repoapi/repo/list','get'],
        reposStatus:['/dormweb-repoapi/repo/setstatus','post']
    },
    getapi(key){
        var arr = apiMap.apiconfig[key],
            location = window.location,
            hostname = location.hostname,
            port = location.port;

        if (!arr) {
            return console.log('api 出错', key)
        } else if (tools.isString(arr)) {
            arr = [arr, 'get'];
        }

        arr = arr.concat([]);

        //开发环境
        // arr[0] = ( (hostname === 'localhost' || hostname === '127.0.0.1' || port == '9000') ? "http://localhost:3003" : "http://one.alibaba.net/bookmark") + arr[0];



        ////添加通用参数
        //if (arr[0].indexOf('?') === -1) {
        //    arr[0] += '?';
        //} else {
        //    arr[0] += '&';
        //}
        //arr[0] += '_tb_token_=' + this.getToken();
        //arr[0] += '&_input_charset=utf-8';

        return arr;
    }
}


export default apiMap;
