$(".add-order table").on("click",".confirm",function(){
	var newTr=$('<tr><td class="order-date"><input type="text" id="dateinfo" readonly/></td><td class="order-customer"><input type="text" /></td><td class="order-list"><input type="text" /></td><td class="order-repairer"><input type="text" /></td><td><button class="confirm">确定</button></td></tr>')
	var valArr=[];
	var val=$(".add-order table td input").each(function(){
		var val=$(this).val()
		valArr.push(val)
	})
	var arg=$("td[class^=order-]")
	if(arg.children("input").val()){
			for (var i = 0; i < arg.length; i++) {
			var newP=$("<p>"+valArr[i]+"</p>")
			arg.eq(i).html(valArr[i]);
		}
		$(".add-order table").append(newTr)
	}else{alert("请填写完整信息")}
})



$("#dateinfo").jeDate({
    format:"YYYY-MM-DD hh:mm",
    isTime:true, 
    minDate:"2016-09-19 00:00:00",
    okfun:function(){return false}
})
