var app = new Vue({
    el: "#container",
    data: {
        //用户信息
        user: false,
        //用户事件
        events: [],
        //页面加载器
        pageLoader :window.pageLoader,
    },
    methods: {
        //获取页面
        getPage: window.getPage,
        //登录框
        login: window.login,
        //提示框
        alert: window.alert,
        //确定提示框
        confirm: window.confirm,
        //查看图片
        alertImg: window.alertImg,
        //获取用户信息
        userInfo: window.userInfo,
        //获取用户事件
        getEvents: window.getEvents,
        //获取菜单
        getMenu:window.getMenu,
        //登录
        loginDo: window.loginDo,
        //dd登录
        ddLoginDo: window.ddLoginDo,
        //转换时间
        toDate: window.toDate
    }, mounted: function () {
        this.getPage("/homePage.html");
    }
})