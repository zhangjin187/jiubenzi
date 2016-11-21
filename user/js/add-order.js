	$(".add-order").find("#dateinfo").jeDate({
    format:"YYYY-MM-DD hh:mm",
    isTime:true, 
    minDate:"2016-09-19 00:00:00",
    okfun:function(){return false}
})
	
	var newTr=$(".confirm").parents("tr").clone()
	$(".add-order table").on("click",".confirm",function(){
	
	var valArr=[];
	$(".add-order table td input").each(function(){
		var val=$(this).val();
		valArr.push(val);
	})
	var arg=$("td[class^=order-]")
	if(arg.children("input").val()){
			for (var i = 0; i < arg.length; i++) {
			arg.eq(i).html(valArr[i]);
		}
		$(".add-order table").append(newTr);
	}else{alert("请填写完整信息")}
})

