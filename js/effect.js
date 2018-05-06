$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	var system ={};
	var p = navigator;
	var wid = 0, hei = 0, size = 1;
	// system.win = p.platform.indexOf("Win") == 0;
	// system.mac = p.platform.indexOf("Mac") == 0;
	// system.x11 = (p.platform == "X11") || (p.platform.indexOf("Linux") == 0);
	system.Android = p.appVersion.indexOf("Android") > 0;
	system.iPhone = p.appVersion.indexOf("iPhone") > 0;
	system.iPad = p.appVersion.indexOf("iPad") > 0;
	if(system.Android||system.iPhone) {
		$('#cen1').addClass('dis-none');
		// $('.balloons').css('background-size', '40px 73.5px');
		// $('.balloons').css('width', '40px');
		// $('.balloons').css('height', '73.5px');
		// $('.balloons h2').css('font-size', '20px');
		size = 0.4;
		// wid = $(window).width()*0.8;
		// hei = $(window).height()*0.6;
	}else if(system.iPad) {
		$('#cen2').addClass('dis-none');
		// $('.balloons').css('background-size', '90px 164.7px');
		// $('.balloons').css('width', '90px');
		// $('.balloons').css('height', '164.7px');
		// $('.balloons h2').css('font-size', '45px');
		size = 0.9;
		// wid = 600;
		// hei = 800;
	}else {
		$('#cen2').addClass('dis-none');
		// wid = 1000;
		// hei = 500;
	}
	wid = $(window).width()*0.8;
	hei = $(window).height()*0.7;

	var vw;
	$(window).resize(function(){
		 vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b11').animate({top:240, left: vw-400*size},500);
		$('#b22').animate({top:240, left: vw-300*size},500);
		$('#b33').animate({top:240, left: vw-200*size},500);
		$('#b44').animate({top:240, left: vw-100*size},500);
		$('#b55').animate({top:240, left: vw+00*size},500);
		$('#b66').animate({top:240, left: vw+100*size},500);
		$('#b77').animate({top:240, left: vw+200*size},500);
		$('#b88').animate({top:240, left: vw+300*size},500);
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(4500).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(4500).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = wid*Math.random();
		var randtop = hei*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b11').animate({top:240, left: vw-400*size},500);
		$('#b22').animate({top:240, left: vw-300*size},500);
		$('#b33').animate({top:240, left: vw-200*size},500);
		$('#b44').animate({top:240, left: vw-100*size},500);
		$('#b55').animate({top:240, left: vw+00*size},500);
		$('#b66').animate({top:240, left: vw+100*size},500);
		$('#b77').animate({top:240, left: vw+200*size},500);
		$('#b88').animate({top:240, left: vw+300*size},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.cake-cover').css('margin-top', '0');
			$('.message').fadeIn('slow');
		});

		for (var i = 1; i <= 8; i++)
		$('#b'+i+i).fadeOut('slow').delay(3000).promise().done(function(){
			console.log(i, "finish");
		});
		
		var i;

		function msgLoop (i) {
			// $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			if (i < 3)
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000).promise().done(function(){
					if(i==10){}
					else{
						msgLoop(i);
					}
				});
			else {
				if (i==3 && system.iPad) $("#blank").fadeIn('fast');
				if(system.Android||system.iPhone)
					$("#pic2"+(i-2)).fadeIn('slow').delay(500).promise().done(function(){
						if(i==10){}
						else{
							msgLoop(i);
						}
					});
				else
					$("#pic1"+(i-2)).fadeIn('slow').delay(500).promise().done(function(){
						if(i==10){}
						else{
							msgLoop(i);
						}
					});
			}
				
			// if(i==2){
			// 	$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
			// 		$('.cake').fadeIn('fast');
			// 	});
				
			// }		

		// });
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');