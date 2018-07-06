$(document).ready(function(){
	$("#play_in").on("click",function(){
		loop_in();
	});
	$("#play_out").on("click",function(){
		loop_out();
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