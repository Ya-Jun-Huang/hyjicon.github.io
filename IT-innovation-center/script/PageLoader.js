//页面加载器
pageLoader = (function () {

    function PageLoader() {
        //历史页面
        this.historyPageUrl = [];
        //当前页面索引
        this.index = 0;
        //
        this.carrier = "#main-content";

        //添加历史
        this.add = function (url) {
            this.historyPageUrl[this.index++] = url;
        }

        //设置页面
        this.setPage = function (url, fun) {
            axios.get(url).then(fun).catch(serverError);
        }

        //获取页面
        this.getPage = function (url, param) {
            url = url + ((typeof param != "undefined") ? "?" + param : "");
            //设置页面
            pageLoader.setPage(url, fun);

            //
            function fun(page) {
                $(pageLoader.carrier).html(page.data);
                pageLoader.add(url);
            }
        }

        //后退
        this.goBack = function () {
            // this.historyPageUrl
            if (this.index - 2 >= 0) {
                this.index--;
                var url = this.historyPageUrl[this.index - 1];
                this.setPage(url, fun);

                function fun(page) {
                    $(pageLoader.carrier).html(page.data);
                }
            } else {
              //  alert("没有上一页");
            }
        }


        //前进
        this.goForward = function () {
            if (this.index < this.historyPageUrl.length) {
                var url = this.historyPageUrl[this.index++];
                this.setPage(url, fun);
                function fun(page) {
                    $(pageLoader.carrier).html(page.data);
                }
            } else {
               // alert("没有下一页");
            }
        }


        this.curPageUrl = function () {
            return this.historyPageUrl[this.index-1];
        }
    }

    return new PageLoader;
}());


window.getPage = function (url, param) {
    pageLoader.getPage(url, param);
}


