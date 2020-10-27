//1.开发环境服务器地址
var baseURL = "http://ajax.frontend.itheima.net"
//1.测试环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"
//1.生产环境服务器地址
// var baseURL = "http://ajax.frontend.itheima.net"

//拦截所有ajax请求:get/post/ajax
//处理参数
$.ajaxPrefilter(function (options) {
    console.log(options.url);
    //拼接对应环境的服务器地址
    options.url = baseURL + options.url
    console.log(options.url);
})