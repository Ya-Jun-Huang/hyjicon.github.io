//信息提示框
alert = function (msg, label) {
    if (typeof label == "undefined") {
        $("#myModal-Label").text("本站提示！")
    } else {
        $("#myModal-Label").text(label);
    }

    if (typeof msg == "undefined") {
        $("#myModal-Msg").text("本站提示！")
    } else {
        $("#myModal-Msg").text(msg);
    }
    $('#myModal').modal('show');
}
//确定提示框
confirm = function (msg, fun, label) {

    if (typeof label == "undefined") {
        $("#confirmModal-Label").text("本站提示！")
    } else {
        $("#confirmModal-Label").text(label);
    }

    if (typeof msg == "undefined") {
        $("#confirmModal-Msg").html("本站提示！")
    } else {
        $("#confirmModal-Msg").html(msg);
    }

    document.getElementById("confirmModal-execute").onclick = fun;
    $('#confirmModal').modal('show');
}


//查看图片的提示框
alertImg = function (msg, label) {
    if (typeof label == "undefined") {
        $("#myModal-Label").text("本站提示！")
    } else {
        $("#myModal-Label").text(label);
    }

    if (typeof msg == "undefined") {
        $("#myModal-Msg").html("本站提示！")
    } else {
        $("#myModal-Msg").html(msg);
    }
    $('#myModal').modal('show');
}
//登录提示框
login = function () {
    $('#loginModel').modal('show');
}

//获取页面
function getPage(url, param) {
    //载体元素
    var $main = $("#main-content");
    //获取页面
    $.get(url, param, function (page) {
        $main.html(page);
    })
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

//转换时间
function toDate(data) {
    return new Date(data).format("yyyy-MM-dd hh:mm")
}


/**
 * 后台登录方法
 */
function loginDo() {
    var data = $("#loginForm").serialize();
    var account = document.getElementById("loginForm").account.value;
    if (account == null || account == "") {
        alert("账号不能为空");
        return;
    }
    axios.post("/login", data).then(function (data) {
        if (data.data.status) {
            alert("认证成功")
            app.userInfo();
        } else {
            alert("认证失败")
        }
    }).catch(function (reason) {
        alert("登录出错")
    })
}

/**
 * 钉钉登录
 */
function ddLoginDo() {
    app.alert("钉钉自动登录中...");
    axios.post("/login", "account=" + ddCode + "&method=dd" + "&authCorpId=" + ddCode
    ).then(function (data) {
        if (data.data.status) {
            alert("认证成功");
            app.userInfo();
        } else {
            alert("认证失败");
        }
    }).catch(function (reason) {
        alert("认证出错");
    })
}

//处理ajax错误请求
function serverError(reason) {
    alert("服务端出错");
}

//处理ajax返回的消息
function outMassage(response) {
    alert(response.data.massage);
}

//连接多个字符串
function strConcat() {
    var re = "";
    for (var i = 0; i < arguments.length; i++) {
        re += arguments[i];
    }
    return re;
}

//获取用户信息
function userInfo() {
    axios.get("/userInfo")
        .then(function (response) {
            //如果已经登录
            if (response.data.status) {
                app.user = response.data.data;
                //获取用户事件
                app.getEvents();

                app.getMenu();

                //如果在钉钉环境下
            } else if (dd.env.platform == "notInDingTalk") {
                app.alert("等待钉钉授权...");
                ddLoginDo();
                //其他登录方式
            } else {
                app.alert("您还没有登录，请先登录。");
                app.login();
            }
        }).catch(function (error) {
        // 请求失败处理
        console.log(error);
    });
}

//获取事件
function getEvents() {
    axios.get("/event/user/notRead").then(function (response) {
        app.events = response.data.data;
    }).catch(serverError)
}

function getMenu() {
    axios.get("/getMenu").then(function (response) {
        $("#nav-accordion").append(response.data);
        //重新加载菜单
        $('#nav-accordion').dcAccordion({
            eventType: 'click',
            autoClose: true,
            saveState: true,
            disableLink: true,
            speed: 'slow',
            showCount: false,
            autoExpand: true,
            //        cookie: 'dcjq-accordion-1',
            classExpand: 'dcjq-current-parent'
        });
        adapt.init();
    }).catch(serverError)

}

//读取url参数
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);