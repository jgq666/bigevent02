$(function () {
    getUserInfo()
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