$(function(){	
	var obj = {
		left:'0px'
			}
	var obj1 = {
		left:'-1000px'
	}
	var obj2 = {
		left:'50px'
	}
	var obj4 = {
		left:'1000px'
	}
	// // 初始动画
	$('.word-slide').eq(0).children('h2').delay(2000).animate(obj2,500,function(){
		$('.word-slide').eq(0).children('p').animate({left:'50px'},500)
	}).animate(obj1,500,function(){
		$('.word-slide').eq(0).children('p').animate(obj1,500);
		$('.word-slide').eq(0).children('a').fadeOut();	
	})			

	var timer = setInterval(run,4000)
	var index = 0;

	function run(){		
		if(index>=2){	
			$('.word-slide').css('left','1000px');
			$('.word-slide').children('h2').css('left','0px');//相对于盒子的位置，盒子相对定位，h2绝对定位
			$('.word-slide').children('p').css('left','0px');
			$('.word-slide').children('a').css('left','0px');
			$('.word-slide').children('a').show()
			$('.word-slide').eq(2).hide();						
			$('.word-slide').eq(0).show()
			index = 0;
		}
		else{		
			$('.word-slide').eq(index).hide().next().show();			
			index++;
		}		
		$('.word-slide').eq(index).css('left','1000px').animate(obj,500,
			function(){
				$('.word-slide').eq(index).children('h2').delay(1000).animate(obj2,500,function(){
					$('.word-slide').eq(index).children('p').animate(obj2,500)
				}).animate(obj1,500,function(){
					$('.word-slide').eq(index).css('left','0px').children('p').animate(obj1,500)
					$('.word-slide').eq(index).children('a').fadeOut();				
				})			
			})	
			
		}

		$('.banner ul li').click(function(){
			clearInterval(timer)
			$('.word-slide').eq(index).children('p').animate(obj4,500,function(){
				$('.word-slide').eq(index).children('h2').animate(obj4,500)
			})
			
		})

		// 滚动条事件
		$(window).scroll(function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;			
			var height = $('.nav').height();
			if(scrollTop>=height){
				$('.nav').css({'position':'fixed','top':'0px'});
			}else{
				$('.nav').css({'position':'static'});
			}
			if(scrollTop>200){
				$('.textContent').fadeIn(1000)
			}
			if(scrollTop>1800){				
				$('.col').eq(0).fadeIn(500,function(){
					$('.col').eq(1).fadeIn(500,function(){
						$('.col').eq(2).fadeIn(500,function(){
							$('.col').eq(3).fadeIn(500)
						})
					})
				})					
			}
			if(scrollTop>2700){
				$('.row-content').fadeIn(1000)
			}
		})

		// 遮罩层
		$('.package ul li').mouseenter(function(){
			$(this).children('div').slideDown();
		})
		$('.package ul li').mouseleave(function(){
			$(this).children('div').slideUp()

		})
		
		$('.col-content').mouseenter(function(){
			$(this).css('box-shadow','0px 0px 10px #272822').css({'zoom':1.01,"transform":"scale(1.01)"})
		})
		$('.col-content').mouseleave(function(){
			$(this).css('box-shadow','0px 0px 0px #ffffff').css({'zoom':1.01,"transform":"scale(1)"})
		})

		// 轮播图  自动
		var timer1 = setInterval(move,3000)
		var num = 1;
		
		function move(){
			if(num>3){
				$('.img').css('left','0px');
				num = 1;
			}
			if(num==3){
				$('.dot li').eq(0).addClass('num').siblings().removeClass('num');
					}
			var obj3 = {
				left:-1000*num + 'px'	
			}
			$('.img').animate(obj3,1000);
			$('.dot li').eq(num).addClass('num').siblings().removeClass('num');		
			num++;
		}

		// 小圆点移入移出事件
		$('.dot li').mouseenter(function(){
				clearInterval(timer1);
				$(this).addClass('num').siblings().removeClass('num');
				num = $(this).index();
				$('.img').animate({left:-1000*num+'px'},500);	
		})
		$('.dot li').mouseleave(function(){
				timer1 = setInterval(move,2000)
		})


		// 右方向键
		var i = 0;	
		function fun(){
			i++;
			if(i==4){
				$('.img').css('left','0px')
				i=1;
			}
			$(".img").animate({left:-i*1000},1000);
			if(i == 3){
        		$(".dot li").eq(0).addClass("num").siblings().removeClass("num");        
		     }else{
		       $(".dot li").eq(i).addClass("num").siblings().removeClass("num");      		           
		    }
		}
		// 左方向键
		function fun2(){
			i--;
			if(i == -1){
				$('.img').css('left','-3000px')
				i = 2;
			}
			$('.img').animate({left:-i*1000+'px'},500);
			$('.dot li').eq(i).addClass('num').siblings().removeClass('num');				
		}

		$('.banner-row').mouseenter(function(){
			clearInterval(timer1);
		})
		$('.banner-row').mouseleave(function(){
			timer1 = setInterval(move,2000)
		})

		$('.right').click(function(){
			clearInterval(timer1);
			fun();
		})
		$('.left').click(function(){
			clearInterval(timer1);
			fun2();
		})


		// 图片遮罩层放大
		$('.images ul li').mouseenter(function(){
			$(this).children('.blur').slideDown()
		})
		$('.images ul li').mouseleave(function(){
			$(this).children('.blur').slideUp()

		})

		// 导航样式
		$('.nav-content ul li a').mouseenter(function(){
			$(this).addClass('bg').parents().siblings().children('a').removeClass('bg')
		})
		$('.nav-content ul li a').mouseleave(function(){
			$('.nav-content ul li a').removeClass('bg');
		})


		// 锚点滚动条事件
		$('.nav-content ul li a').click(function(){
			 $('html, body').stop().animate({ 
			        scrollTop: $( $(this).attr('href') ).offset().top - 100 
			    }, 500); 
		   	 return false; 
			})

		// 查看大图
		var n;
		$('.picture').click(function(e){
			 e.preventDefault();
			 n = $(this).index();
			console.log(n)
			var _this = $(this).src;
			console.log(_this)
		})

		
		

})

