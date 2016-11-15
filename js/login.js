$(".top-bar .iconfont").click(function(){
	$(".login-window").hide()
})
$(".login a:nth-child(1)").click(function(e){
	e.preventDefault()
	$(".login-window").show()
	
})