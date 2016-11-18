// 增加维修类型
$('.add-repair-type').click(function(){
	// console.log(1)
	// console.log($('.add-repair-ul').index($('<li><span>' + $(this).siblings('input').val() + '</span><input class="del-repair-type r" type="button" value="删除" /></li>')))
	if($(this).siblings('input').val())
		$('.add-repair-ul').append('<li><span>' + $(this).siblings('input').val() + '</span><input class="del-repair-type r" type="button" value="删除" /></li>');
	$(this).siblings('input').val('');
})

// 删除当前
$('.add-repair-ul').on('click', 'input[type=button]', function(){
	// console.log('del-repair-type')
	$(this).parents('li').remove();
})

// 是否离开
$('.no-add').click(function(){
	// console.log(12)
	if(confirm('是否放弃')){
		// console.log(1)
		window.history.back(-1);
	}else{

	}
});
window.onbeforeunload = function(event){
	// return '您数据还未保存'; 	//	上线保留
}



// 是否保存
$('.add-info').click(function(){
	console.log('此处ajax请求')
})