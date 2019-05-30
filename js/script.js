$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;
	var flag1= false;
	var scroll1;
	var flag2= false;
	var scroll2;
	var flag3= false;
	var scroll3;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"box-shadow": "3px 3px #FC4", "transition-property": "box-shadow", "transition-duration": "1s", "transition": "all 1s ease", "margin-top": "-5px", "width": "50px","height":"50px"});
				
				$(".ul_a").css({"text-shadow": "1px 1px #FF4584", "transition-property": "text-shadow", "transition-duration": "1s", "transition": "all 1s ease"});

				$("header").css({"background-color": "#905FFF"});
				flag = true;
				
				
				
			}
		}else{
			if(flag){
				$("#logo").css({"box-shadow": "10px 10px #F0C", "transition-property": "box-shadow", "transition-duration": "1s", "transition": "all 1s ease", "margin-top": "150px", "width": "250px","height":"250px"});
				
				$(".ul_a").css({"text-shadow": "1px 1px #FC4", "transition-property": "text-shadow", "transition-duration": "1s", "transition": "all 1s ease"});

				$("header").css({"background-color": "transparent"});
				flag = false;
				
			}
		}


	});
	
	$(window).scroll(function(){
		scroll1 = $(window).scrollTop();
		

		if(scroll1 > 920){
			if(!flag1){
				$("#article").css({"background-color": "#502050", "transition-property": "background-color", "transition-duration": "1s"});
								
				
			}
		}else{
			if(flag1){
				
				$("#article").css({"background-color": "#2A2A2A", "transition-property": "background-color", "transition-duration": "1s"});
				flag1 = false;
				
			}
		}


	});
	
	
	$(window).scroll(function(){
		scroll2 = $(window).scrollTop();
		

		if(scroll2 > 1600){
			if(!flag2){
				$("#article").css({"background-color": "#2A2A2A", "transition-property": "background-color", "transition-duration": "1s"});
								
				
			}
		}else{
			if(flag2){
				
				$("#article").css({"background-color": "#2A2A2A", "transition-property": "background-color", "transition-duration": "1s"});
				flag2 = false;
				
			}
		}


	});
	
	
	$(window).scroll(function(){
		scroll3 = $(window).scrollTop();
		

		if(scroll3 < 920){
			if(!flag3){
				$("#article").css({"background-color": "#2A2A2A", "transition-property": "background-color", "transition-duration": "1s"});
								
				
			}
		}else{
			if(flag3){
				
				$("#article").css({"background-color": "#2A2A2A", "transition-property": "background-color", "transition-duration": "1s"});
				flag3 = false;
				
			}
		}


	});


});