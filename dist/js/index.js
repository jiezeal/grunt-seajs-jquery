// 所有模块都通过 define 来定义
define("./dist/js/index", [ "./module" ], function(require, exports, module) {
    // 通过 require 引入依赖模块
    var index = require("./module");
    index.fun1();
    index.fun2();
    // 异步引入依赖模块
    require.async("../../lib/jquery.min", function() {
        var $ = jQuery;
        $("#box").on("click", function() {
            alert("box");
        });
        $("#box .pox").on("click", function(e) {
            e.stopPropagation();
            alert("pox");
        });
    });
});

// 所有模块都通过 define 来定义
define("./dist/js/module", [], function(require, exports, module) {
    var obj = {};
    obj.fun1 = function() {
        console.log("fun1");
    };
    obj.fun2 = function() {
        console.log("fun2");
    };
    // 通过 module.exports 提供整个接口
    module.exports = obj;
});
