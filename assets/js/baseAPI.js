//1.开发环境服务器地址
var baseURL = "http://ajax.frontend.itheima.net"
//1.测试环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"
//1.生产环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"

//拦截所有ajax请求:get/post/ajax
//处理参数
$.ajaxPrefilter(function (options) {
    // console.log(options.url);
    //拼接对应环境的服务器地址
    options.url = baseURL + options.url
    // console.log(options.url);

    //对需要权限的接口配置头信息
    //必须以my开头才行
    if (options.url.indexOf("/my/") !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
})


