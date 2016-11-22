var postData = {
	mobile : '13070552899',
	password : '123456',
	factoryId : 18
};
postData.mobile = $.cookie.get('mobile');
postData.password = $.cookie.get('password');
postData.factoryId = $.cookie.get('factoryId');


function fullpage(data){
	console.log(data);
	// data = [];
	$('.check-table table tbody tr').remove()
	if(data.length <= 0){
		// window.location.href = 'add-staff.html';
		$('.check-table table tbody').append('<tr> <td colspan="80"><a href="add-store.html">您暂时没有零件，点击此处添加零件</a></td> </tr>');
	}
	// $('.check-table table tbody').append('<tr title="点击查看详情"> <td>zzzzz</td> <td>2016/11/15/18:16</td> <td> <ul> <li>修理轮胎</li> <li>修理车灯</li> <li>修理发动机</li> <li>修理轮胎</li> </ul> </td> <td>600</td> <td title=""> <p><button class="change-repair-info">更改</button></p> <p><button class="del-repair-info">删除</button></p> </td> </tr>')
	for(var i = 0; i < data.length; i ++){
		var a=(data[i].memo)?(data[i].memo):'无';
		$('.check-table table tbody').append('<tr title="点击查看详情" moneyId=' + data[i].id + '> <td>' + data[i].name + '</td> <td> ' + data[i].createTime + '</td>  <td>' + data[i].primaryPrice + '</td>  <td>' + data[i].salePrice + '</td>  <td>' + data[i].number + '</td> <td>' + a  + '</td> <td title=""> <p><button class="change-repair-info">更改</button></p> <p><button class="del-repair-info">删除</button></p> </td></tr>')
	}
}


function checkStaff(fullpage){

	postData.name = $('.staff-name').val();
	postData.mobile = parseInt($('.staff-tel').val());
	
	$.post( 'http://139.129.222.154:8080/car/app/car/factory/queryRepareFeeItemList.do', postData, function(data){
		// data = JSON.parse(data)
		if(!data.code){
			data = JSON.parse(data)
		}
		if(data.code == '0000'){
			fullpage(data.data);
		}else{
			alert(data.errorMessage);
		}
	});
}
checkStaff(fullpage);

// $(".del-repair-info").click(function)
$('.check-table').on('click', '.del-repair-info',function(){
	// console.log($(this).parents('tr').attr('staffId'));
	if(confirm('确定删除')){
		deleteStaff($(this).parents('tr').attr('moneyId'));
	}
})

function deleteStaff(a){
	var postData = {
		"mobile": "183",
		"password": "001",
		'factoryId': '16',
		'pageSize' : '10',
		'pageNo' : '1'
	};

	postData.id = parseInt(a);
	// postData.mobile = $('.staff-tel').val();
	// postData = (function(obj){ // 转成post需要的字符串.
	// 	var str = "";
	// 	// console.log(obj)
	// 	for(var prop in obj){
	// 	    // str += prop + "=" + obj[prop] + "&"
	// 	}
	// 	// console.log(str)
	// 	return str;
	// })(postData);
	console.log(postData);
	$.post( 'http://139.129.222.154:8080/car/app/car/factory/deleteRepareFeeItem.do', postData, function(data){
		// data = JSON.parse(data)
		if(!data.code){
			data = JSON.parse(data)
		}
		if(data.code == '0000'){
			console.log(data,data.data);
			// fullpage(data.data);
			window.location.reload();
		}else{
			alert(data.errorMessage);
		}
	});
}




$('.check-table').on('click', '.change-repair-info',function(){
	window.location.href = 'add-staff.html?changeId=' + $(this).parents('tr').attr('staffId');
})
