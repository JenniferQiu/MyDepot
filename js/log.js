$(function(){
	$('input').eq(0).focus();
	$('#autoRandom').text(createCode(4))
	function createCode(len)
	        {
	            var seed = new Array(
	                    'abcdefghijklmnopqrstuvwxyz',
	                    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	                    '0123456789'
	            );              
	            var x,i;
	            var result = '';  
	            for (i=0; i<len; i++) 
	            {
	                x = Math.floor(Math.random()*3); 
	                result += seed[x].substr(Math.floor(Math.random()*(seed[x].length)), 1);
	            }
	            return result; 
	        }
		function test(){
			var input = $('#inputRandom').val();
			console.log(input)
			var auto = $('#autoRandom').text();
			console.log(auto)
			if(input!=auto){
				$('#test').text('*验证码错误');
			}
		}
		$('#yan').click(function(){
			test();
		})

		$('#autoRandom').click(function(){
			var res = createCode(4);	
			$('#autoRandom').text(res);			
		})
	var pass = $('#pass').val()
	$('#pass').focus(function(){
		if(pass==''){
		$('#pass').next().text('*password can not be blank');
		$('#pass').next().css('color','red')
		}
	})
	$('#pass').blur(function(){
		var pattern = /^\w{6,}$/;
		if(pattern.test(pass)){
			$('#pass').next().text('')
		}
	})

})
