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


// 最大页数
// var maxpage = 7;
if(!maxpage){
	var maxpage = 1;
}
var pagenum = 1;
// 生成点击个数
function changeclicknum(){
	$('.pagenum a').remove()
	// console.log((i < maxpage) && (i > pagenum +3))
	for(var i = pagenum-3; ((i < maxpage) && (i < pagenum +2)); i++){
		if(i < 0) i = 0;
		// console.log(i)
		$('.pagenum').append('<a num="'+ (i+1) +'">' + (i+1) + '</a>');
	}
}

// 判断页面状态
function nowPage (){
	changeclicknum();
	// console.log(pagenum)
	$('.pagechange b').show();
	if(pagenum <= 1){
		pagenum = 1;
		$('b.first,b.prev').hide();
	}
	if(pagenum >= maxpage){
		pagenum = maxpage;
		$('b.end,b.next').hide();
	}
	$('.pagenum a[num=' + pagenum + ']').addClass('checked').siblings().removeClass('checked');
}


changeclicknum();
nowPage();
	
// 点击数值按钮
// $('.pagenum a').click(function(){
	
// })
$('.pagenum').on('click', 'a', function(){
	pagenum = parseInt(this.innerHTML);
	// $(this).addClass('checked').siblings().removeClass('checked');
	nowPage();
})

// 首页
$('b.first').click(function(){
	pagenum = 1;
	nowPage();
})
// 上一页
$('b.prev').click(function(){
	pagenum --;
	nowPage();
})

// 下一页
$('b.next').click(function(){
	pagenum ++;
	nowPage();
})

// 尾页
$('b.end').click(function(){
	pagenum = maxpage;
	nowPage();
})




if($.jeDate){
	$(".time").jeDate({
	    format:"YYYY-MM-DD",
	    isTime:true, 
	    minDate:"2016-09-19",
	    okfun:function(){return false}
	});
}

