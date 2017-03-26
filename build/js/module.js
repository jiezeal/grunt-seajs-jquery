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
