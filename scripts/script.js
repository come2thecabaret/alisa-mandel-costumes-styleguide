$(document).ready(function(){
	$("#play_in").on("click",function(){
		loop_in();
	});
	$("#play_out").on("click",function(){
		loop_out();
	});
	$("#play_fade").on("click",function(){
		loop_fade();
	});
	$(".left-feature li").on("click", function(){
		console.log($(this).data("target"), $(".content").scrollTop(), $($(this).data("target")).offset().top);
		console.log();
		$('.content').animate({
			scrollTop: "+=" + $($(this).data("target")).offset().top
		}, 1000, 'easeOutQuad');
	});
});

function loop_in() {
	$('#animate_in .node').css({right:"0%"});
	$('#animate_in .node').animate ({
		right: '+=95%',
	}, 1000, 'easeOutQuad');
}
function loop_out() {
	$('#animate_out .node').css({left:"0%"});
	$('#animate_out .node').animate ({
		left: '+=95%',
	}, 1000, 'easeInQuad');
}
function loop_fade() {
	$('#animate_fade .node').css('opacity','1');
	$('#animate_fade .node').animate ({
		opacity: '0',
	}, 500, 'linear');
}
