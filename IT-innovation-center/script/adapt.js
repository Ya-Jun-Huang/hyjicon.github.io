function Adapt() {
    this.w1 = 768;
    this.w2 = 992;
    this.w3 = 1200;

    //初始化
    this.init = function () {
        var windowWidth = window.innerWidth;
        this.setClick(windowWidth);
    }

    //设置
    this.setClick = function (windowWidth) {


        if (windowWidth < this.w1) {

            $(".sub li").click(function () {
                $(".adapt-menu-ctrl").click();
            });
        } else {
            $(".sub a").click(function () {

            });
        }
    }


}



var adapt = new Adapt();



// window.onresize = function () {
//     var windowWidth = window.innerWidth;
//     adapt.setClick(windowWidth);
// }