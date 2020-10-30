$(function () {
    //1.获取用户信息
    getUserInfo()
    //2.退出
    var layer = layui.layer
    $('#btnLogout').on('click', function () {
        layer.confirm('是否确认退出', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token')
            location.href = "/login.html"

            layer.close(index);
        });
    })
})

function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function (res) {
            // console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            // console.log(res.message);
            renderAvatar(res.data)
        }
    })
}

//封装用户头像渲染函数
function renderAvatar(user) {
    var name = user.nickname || user.username
    console.log(name);
    $("#welcome").html("欢迎&nbsp;&nbsp;" + name)
    // console.log(num);
    if (user.user_pic !== null) {
        $('layui-nav-img').show().attr('src', user.user_pic)
        $('.user-avatar').hide()
    } else {
        // 没有头像
        $('.layui-nav-img').hide()
        var text = name[0].toUpperCase()
        $('.user-avatar').show().html(text)
    }
}