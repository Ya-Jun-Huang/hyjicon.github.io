/**
 * 登录js
 * @constructor
 */

//加载钉钉
var ddCode = "123";


dd.ready(function () {
    // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
    dd.runtime.permission.requestAuthCode({
        corpId: "dingc2f3af5167e8a18a35c2f4657eb6378f",
        onSuccess: function (result) {
            ddCode = result.code;
            ddLoginDo();
        },
        onFail: function (err) {
            alert("dd 出错了" + JSON.stringify(err));
        }
    });
    //出错
    dd.error(function (error) {
        alert('dd error: ' + JSON.stringify(error));
    });
});

//获取用户信息
function userInfo() {
    axios.get("/userInfo")
        .then(function (response) {
            //如果已经登录
            if (response.data.status) {
                app.user = response.data.data;
                //获取用户事件
                app.getEvents();
                //加载菜单
                app.getMenu();
                //测试环境下
            } else if (dd.env.platform != "notInDingTalk") {
                app.alert("等待钉钉授权...");
                ddLoginDo();
                //其他登录方式
            } else {
                //目前暂时只使用钉钉用户
                app.alert("您还没有登录，请先登录。");
                app.login();
            }
        }).catch(function (error) {
        // 请求失败处理
        console.log(error);
    });
}

/**
 * 钉钉登录
 */
function ddLoginDo() {
    // alert("钉钉自动登录中...");
    axios.post("/login", "account=" + ddCode + "&method=dd" + "&authCorpId=" + ddCode
    ).then(function (data) {
        if (data.data.status) {
            // alert("认证成功");
            app.userInfo();
        } else {
            alert("认证失败");
        }
    }).catch(function (reason) {
        alert("认证出错");
    })
}


/**
 * 后台登录方法
 */
function loginDo() {
    var data = $("#loginForm").serialize();
    var account = document.getElementById("loginForm").account.value;
    var password = document.getElementById("loginForm").password.value;
    if (account == null || account == "") {
        alert("账号不能为空");
        return;
    }
    if (password == null || password == "") {
        alert("密码不能为空");
        return;
    }
    axios.post("/login", {
        account: account,
        password: password,
        method: "local",
    }).then(function (data) {
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


//获取事件
function getEvents() {
    axios.get("/event/user/notRead").then(function (response) {
        app.events = response.data.data;
    }).catch(serverError)
}

//获取操作菜单
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
        adapt.menuAdapt();
    }).catch(serverError)

}