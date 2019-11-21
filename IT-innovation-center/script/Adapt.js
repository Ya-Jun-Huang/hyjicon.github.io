//响应事件
window.adapt = (function () {

    //设置菜单点击事件
    $(".hyj-footer-mobile-item").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });


    /*@class*/
    function Adapt() {
        this.w0 = 320;
        this.w1 = 768;
        this.w2 = 992;
        this.w3 = 1200;

        //resize执行的方法
        this.onresize = function () {
            //菜单响应
            this.menuAdapt();
            //设置页头响应
            this.headerAdapt();
            //设置页脚响应
            this.footerAdapt();
        }

        //菜单响应
        this.menuAdapt = function () {
            var windowWidth = window.innerWidth;
            this.menuClick(windowWidth);
        }

        //菜单点击事件
        this.menuClick = function (windowWidth) {
            //如果是手机屏幕则添加点击事件
            if (windowWidth < this.w1) {
                $(".sub li").click(function () {
                    $(".adapt-menu-ctrl").click();
                });
            } else {
                //如果是电脑屏幕则清楚点击事件
                $('#adapt-menu-ctrl').unbind("click");
            }
        }

        //设置页头
        this.headerAdapt = function () {
            var windowWidth = window.innerWidth;
            //如果是手机
            if (windowWidth < this.w1) {
                $(".hyj-header-mobile").css("display", "block");
                $(".hyj-header-pc").css("display", "none");
                //如果是电脑
            } else {
                $(".hyj-header-mobile").css("display", "none");
                $(".hyj-header-pc").css("display", "block");
            }
        }

        //设置页脚
        this.footerAdapt = function () {
            var windowWidth = window.innerWidth;
            //如果是手机
            if (windowWidth < this.w1) {
                $(".hyj-footer-mobile").css("display", "block");
                $(".hyj-footer-pc").css("display", "none");
                //如果是电脑
            } else {
                $(".hyj-footer-mobile").css("display", "none");
                $(".hyj-footer-pc").css("display", "block");
            }
        }


        //执行一次
        this.onresize();


    }

    return new Adapt();
}());

//将事件绑定到window
window.onresize = function (ev) {
    adapt.onresize();
}




