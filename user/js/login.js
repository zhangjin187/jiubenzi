// 返回顶部的jq
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
// 关闭登录框
$(".top-bar .iconfont").click(function(){
	$(".login-window").hide()
});
// 弹出登录框
$(".login>a.loginAddr").click(function(e){
	e.preventDefault()
	$(".login-window").show()
	
})
// 登录
$('#submit').click(function(){
	var fleg = $('#user').val()
	if(fleg){
		$('.login-befor').addClass('hide');
		$('.login-after').removeClass('hide');
		$(".login-window").hide();
		$('.input-area p>span').removeClass('error');
	}else{
		$('.input-area p>span').addClass('error');
	}
})
// 退出
$('.login-out').click(function(){
	if(1){
		$('.login-befor').removeClass('hide');
		$('.login-after').addClass('hide');
		window.location.reload();
		document.cookie="name="+'031488';
		delAllCookie();
	}
})
function delAllCookie(){    
	var myDate=new Date();    
	myDate.setTime(-1000);//设置时间    
	var data=document.cookie;    
	var dataArray=data.split("; ");    
	for(var i=0;i<dataArray.length;i++){    
		var varName=dataArray[i].split("=");    
		document.cookie=varName[0]+"=''; expires="+myDate.toGMTString();    
	}    

}          
