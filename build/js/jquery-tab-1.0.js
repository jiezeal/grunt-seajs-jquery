/*---------------------------------------------------------------------------
对象级别开发小实例之tab标签页
---------------------------------------------------------------------------*/
define("./dist/js/jquery-tab-1.0", [], function(require, exports, module) {
    (function($) {
        $.fn.tabTag = function(options) {
            // 默认参数
            var defaults = {
                current: "current",
                tabNav: ".mt>li",
                tabContent: ".mc>div",
                eventType: "click"
            };
            var options = $.extend({}, defaults, options);
            this.each(function() {
                var tabTag = $(this);
                var timer = null;
                tabTag.find(options.tabNav).bind(options.eventType, function() {
                    var obj = $(this);
                    if (options.eventType == "mouseover" || options.eventType == "mouseenter") {
                        timer = setTimeout(function() {
                            obj.addClass(options.current).siblings().removeClass(options.current);
                            var index = obj.index();
                            tabTag.find(options.tabContent).eq(index).show().siblings().hide();
                        }, 200);
                    } else {
                        obj.addClass(options.current).siblings().removeClass(options.current);
                        var index = obj.index();
                        tabTag.find(options.tabContent).eq(index).show().siblings().hide();
                    }
                });
                if (options.eventType == "mouseover") {
                    tabTag.find(options.tabNav).bind("mouseout", function() {
                        clearTimeout(timer);
                    });
                }
                if (options.eventType == "mouseenter") {
                    tabTag.find(options.tabNav).bind("mouseleave", function() {
                        clearTimeout(timer);
                    });
                }
            });
            module.exports = this;
            return this;
        };
    })(jQuery);
});
