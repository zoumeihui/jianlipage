$(function() {
	$('#dowebok').fullpage({
		menu: '#mymenu',
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		//设置颜色参数
		css3: true,
		resize: true,
		anchors: ['firstpage', 'secondpage', 'treepage', 'fourpage', 'fivepage'],
		navigation: true, //是否显示导航，默认为false
		navigationPosition: 'right', //导航小圆点的位置
		navigationTooltips: ['首页', '关于我', '技能', '实习经历', '自我评价'], //导航小圆点的提示
		easing: 'easeInOutCubic', //定义页面section滚动的动画方式，若修改此项需引入jquery.easing插件
		easingcss3: 'ease', //定义页面section滚动的过渡效果，若修改此项需引入第三方插件
		afterRender: function() {
			$(".ro").fadeIn(450, function() {
				$(".home-info").fadeIn(600, function() {
					$(".home-infobox").animate({
						width: "80%"
					}, 700, function() {
						$("#infoname").fadeIn(450, function() {
							$(this).next().fadeIn(450, function() {
								$(this).next().fadeIn(450, function() {
									$(this).next().fadeIn(450, function() {});
								});
							});
						});
					});
				});
			});
		},
		afterLoad: function(anchorLink, index) {
			if(index == 2) {
				$(".aboutmecontainer h1").after("<div class='titlemore'><h2>· Educational ·</h2></div>");
				showline();
			}
			if(index == 3) {
				$(".skillcontainer h1").after("<div class='titlemore'><h2 >· Skill ·</h2></div>");
				showline();
			}
			if(index == 4) {
				$(".expirencecontainer h1").after("<div class='titlemore'><h2 >· Experience ·</h2></div>");
				showline();
			}
			if(index == 5) {
				tosnow();
			}
		},
		onLeave: function(index) {
			if(index == 2 || index == 3 || index == 4 || index == 5) {
				$(".titlemore").remove();
			}
			if(index == 5) {
				snowstop();
				$(".snowflower").remove();
			}
		}
	});

	function showline() {
		$(" .titlemore").animate({
			width: "130px"
		}, 800, function() {
			$(" .titlemore h2").slideDown(400);
		});
	}

	function tosnow() {
		//下雪
		var minSize = 5; //雪花最小的尺寸
		var maxSize = 18; //雪花最大的尺寸
		var newOn = 300; //时隔多长时间产生一个雪花，值越小，雪越大
		var flake = $("<div class='snowflower'></div>").css("position", "absolute").html("❀"); //雪花
		snowdown = setInterval(function() {
			var wWidth = $(document).width(); //浏览器的宽度
			var wHight = $(document).height(); //浏览器的高度
			var startLeft = Math.random() * wWidth; //雪花一开始距离浏览器的间距左
			var endLeft = Math.random() * wWidth; //雪花一下落后距离浏览器的间距左
			var flakeSize = minSize + maxSize * Math.random(); //雪花的大小
			var flakeOpacity = 0.7 + Math.random() * 0.3; //雪花开始时的透明度
			var flakeEndOpacity = 0.5 + Math.random() * 0.3; //雪花下落后的透明度
			var durationTime = 3000 * Math.random() + 10 * wHight; //雪花下落的时间
			flake.clone().appendTo($("body")).css({
				"left": startLeft,
				"font-size": flakeSize,
				"opacity": flakeOpacity,
				"color": "#FFF",
				"top": "-55px"
			}).animate({
				"left": endLeft,
				"opacity": flakeEndOpacity,
				"top": wHight
			}, durationTime, function() {
				$(this).remove();
			});
		}, newOn);
		$(".reviewcontainer h1").after("<div class='titlemore'><h2 >· Review ·</h2></div>");
		$(" .titlemore").animate({
			width: "130px"
		}, 800, function() {
			$(" .titlemore h2").slideDown(400);
		});
	};

	$(".cbp_tmlabel h2 a").click(function() {
		$(this).text() == "收起" ? $(this).html("查看") : $(this).html("收起");
		var then = $(this).parent().siblings();
		then.slideToggle("show");
	});

	function snowstop() {
		clearInterval(snowdown);
	};
	//顶部标题文字切换
	$(".header-p").mouseover(function() {
		$(".header-p1").html("Resume");
		$(".header-p2").html("前端工程师");
	}).mouseout(function() {
		$(".header-p1").html("F2E");
		$(".header-p2").html("个人简历");
	});
	$('.header-p').on('touchmove', function() {
		$(".header-p1").html("Resume");
		$(".header-p2").html("前端工程师");
	});

	$('.header-p').on('touchend', function() {
		$(".header-p1").html("F2E");
		$(".header-p2").html("个人简历");
	});
	$('.phonenav ul li:nth-child(0)').click(function() {
		$.fn.fullpage.moveTo(1);
	});
});