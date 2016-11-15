
$.fn.rocket = function() {
	var $this = this;
	$(document).scroll(function() {
		if($("body").scrollTop() < $(window).height()-500) {
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
$(".top-bar .iconfont").click(function(){
	$(".login-window").hide()
})
$(".login a:nth-child(1)").click(function(e){
	e.preventDefault()
	$(".login-window").show()
	
})