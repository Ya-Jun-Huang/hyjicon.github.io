// //加载静态资源的js
// var LoadStatic = new Object();
// LoadStatic.config = {
//     name: "IT-innovation-center",
//     staticResource: {
//         git: {
//             addr: "https://hyjicon.github.io/",
//             prefix: "IT-innovation-center",
//             labelAttr: "git",
//             expression: "{git}"
//         },
//         local: {
//             "addr": "/",
//             prefix: "",
//             label: "{local}"
//         }
//     },
//
// }
// //构造-用来做挂载，把所有属性方法挂载到window对象
// LoadStatic.constructor = function () {
//     window.getPage = this.getPage;
//     window.getGitPage = this.getGitPage;
// }
//
//
// //加载页面
// LoadStatic.getPage = function (url, param) {
//     //载体元素
//     var $main = $("#main-content");
//     //获取页面
//     $.get(url, param, function (page) {
//         $main.html(page);
//     })
// }
//
// //加载git的资源
// LoadStatic.getGitPage = function (url, param) {
//     //渲染url
//     handlerUrl(this.config.staticResource.git.addr + this.config.staticResource.git.prefix);
//
//     //载体元素
//     var $main = $("#main-content");
//     //获取页面
//     $.get(url, param, function (page) {
//         $main.html(page);
//     })
//
//     //渲染url
//     function handlerUrl(prefix, url) {
//         // if (url[0] == "/")
//         //     return url = url.substr(1, url.length)
//         url = prefix + url;
//         return url;
//     }
// }
//
// //渲染视图
// LoadStatic.renderForGit = function () {
//     var attr = LoadStatic.config.staticResource.git.labelAttr;
//     var $1 = $("* [" + attr + "]");
//
//     for (var i = 0; i < $1.length; i++) {
//         var targetAttr = $($1[i]).attr(attr);
//
//         if (typeof targetAttr=="undefined"|| targetAttr == null || targetAttr == "") {
//             //默认
//             defaultRender($($1[i]));
//         } else {
//             //目标渲染
//             targetRender($($1[i]), targetAttr);
//         }
//         $($1[i]).attr(targetAttr);
//     }
//
//     function defaultRender(jqEle) {
//         var gitPrefix = LoadStatic.config.staticResource.git.addr + LoadStatic.config.staticResource.git.prefix
//         //渲染src属性
//         var src = jqEle.attr("src");
//         if (typeof src != "undefined") {
//             src =  src.replace(LoadStatic.config.staticResource.git.expression, gitPrefix);
//             jqEle.attr("src", src);
//         }
//         //渲染href属性
//         var href = jqEle.attr("href");
//         if (typeof href != "undefined") {
//             href = href.replace(LoadStatic.config.staticResource.git.expression, gitPrefix);
//             jqEle.attr("href", href);
//         }
//     }
//
//
//     function targetRender(jqEle, attr) {
//         var gitPrefix = LoadStatic.config.staticResource.git.addr + LoadStatic.config.staticResource.git.prefix
//         //渲染src属性
//         var value = jqEle.attr(attr);
//         if (typeof value != "undefined") {
//             value =  value.replace(LoadStatic.config.staticResource.git.expression, gitPrefix);
//             jqEle.attr(attr, value);
//         }
//
//     }
// }
// //调用视图渲染
// LoadStatic.renderForGit();
// //
// LoadStatic.constructor();
//
//
//
