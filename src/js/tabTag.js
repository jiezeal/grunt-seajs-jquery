// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	// 异步引入依赖模块
	require.async('../../lib/jquery.min', function(){
		// 引入tab标签页插件
		require('./jquery-tab-1.0');
		var $ = jQuery;

		$('#tab').tabTag({
			current: 'currentClass',
			tabNav: '.title>li',
			tabContent: '.content>div',
			eventType: 'mouseenter'
		}).find('.content div').css('color', '#369');

	});

});