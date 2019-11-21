//工具js
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

//
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