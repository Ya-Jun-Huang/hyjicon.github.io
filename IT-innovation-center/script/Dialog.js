//提示框js
//信息提示框
alert = function (msg, label, type) {

    if (typeof type == "undefined") {
        type = 1;
    }

    if (typeof label == "undefined") {
        label = "本站提示！";
    }

    if (typeof msg == "undefined") {
        msg = "本站提示！";
    }

    switch (type) {
        case 1:a1(msg, label);break;
        case 2:a2(msg, label);break;
    }

    //第一种
    function a1(msg, label) {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: label,
            // (string | mandatory) the text inside the notification
            text: msg,
            // (string | optional) the image to display on the left
            image: 'https://hyjicon.github.io/IT-innovation-center/view/img/logo.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: ''
        });
    }

    //第二种
    function a2(msg, label) {
        $("#myModal-Label").text(label);
        $("#myModal-Msg").text(msg);
        $('#myModal').modal('show');
    }
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
