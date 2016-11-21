// 增加维修类型
$('.staff-type').click(function(){
	// console.log($('.add-staff-ul').index($('<li><span>' + $(this).siblings('input').val() + '</span><input class="del-staff-type r" type="button" value="删除" /></li>')))
	if($(this).siblings('input').val()){
			$('.add-staff-ul').append('<li><span class="staff-type">' + $(this).siblings('input').val() + '</span><input class="del-staff-type r" type="button" value="删除" /></li>');
		}
	$(this).siblings('input').val('');
})

// 删除当前
$('.add-staff-ul').on('click', 'input[type=button]', function(){
	// console.log('del-staff-type')
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
	addstaff();
})

var postData = {
	"mobile": "183",
	"password": "001",
	'factoryId': '16',
	'pageSize' : '10',
	'pageNo' : '1'
};


function addstaff(){
	postData.name = $('.staff-name').val();
	postData.mobile = $('.staff-tel').val();
	postData1 = (function(obj){ // 转成post需要的字符串.
		var str = "";
		for(var prop in obj){
		    str += prop + "=" + obj[prop] + "&"
		}
		return str;
	})(postData);
	$.post( 'http://139.129.222.154:8080/car/app/car/factory/saveRepareFeeItem.do', postData1, function(data){
		// data = JSON.parse(data)
		if(!data.code){
			data = JSON.parse(data)
		}
		if(data.code == '0000'){
			console.log(data,data.data);
			// window.location.href = 'check-staff.html';
		}else{
			alert(data.errorMessage)
			console.log(data,data.data);
		}
	});
}

