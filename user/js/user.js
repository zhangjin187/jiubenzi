$.fn.rocket = function() {
	var $this = this;
	$(document).scroll(function() {
		if($("body").scrollTop() < $(window).height() - 500) {
			$this.fadeOut();
		} else {
			$this.fadeIn();
		}
	})
	this.click(function() {
		$("body").animate({
			scrollTop: 0
		})
	})
}
$('.toTop').rocket();
$.fn.accordion = function(obj) {
	var open = obj.open;
	this.children().click(function() {
		$(this).addClass(open).siblings().removeClass(open);
		return this;
	})
}
$(".service,.user-hub").accordion({
	open: "open"
})
//$(".service>li li,.user-hub>li li").hover(function(){
//		$(this).addClass("active").siblings().removeClass("active")
//})