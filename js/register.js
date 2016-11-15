// $('table input[type=text],table input[type=password]').blur(function(){
// 	// console.log(this.value)
// 	if(this.value.length < 6){
// 		$(this).addClass('inError');
// 		return;
// 	}
// 	$(this).parent().removeClass('inError');

// });
var username,phonenumber,verificationcode,password,password1,checkbox;
// 判断用户名
$('table input[name=username]').blur(function(){
	// console.log(this.value)
	if(this.value.length < 3 || this.value.length > 12){
		$(this).parent().addClass('inError');
		username = false;
		return;
	}
	$(this).parent().removeClass('inError');
	username = true;
});

// 判断phonenumber
$('table input[name=phonenumber]').blur(function(){
	// console.log(this.value)
	var res=/^1[3,5,8,7]{1}\d{9}/;
	if(!res.test(this.value)){
		$(this).parent().addClass('inError');
		phonenumber = false;
		return;
	}
	$(this).parent().removeClass('inError');
	phonenumber = true;
});

$('table button[name=verificationcode]').click(function(){
	// console.log(this.value)
	// 判断手机号码
	if(!phonenumber){
		$('table input[name=phonenumber]').parent().addClass('inError');
		phonenumber = false;
		return;
	}
});

// 判断verificationcode
$('table input[name=verificationcode]').blur(function(){
	// console.log(this.value)
	if(!phonenumber){
		$('table input[name=phonenumber]').parent().addClass('inError');
		phonenumber = false;
		return;
	}
	if(this.value.length < 3 || this.value.length > 12){
		$(this).parent().addClass('inError');
		verificationcode = false;
		return;
	}
	$(this).parent().removeClass('inError');
	verificationcode = true;
});

// 判断password
$('table input[name=password]').blur(function(){
	// console.log(this.value)
	var res=/^[A-z|0-9]{6,16}/;
	if(!res.test(this.value)){
		$(this).parent().addClass('inError');
		password = false;
		return;
	}
	$(this).parent().removeClass('inError');
	password = true;

});

// 判断password1
$('table input[name=password1]').blur(function(){
	// console.log(this.value == $('table input[name=password]').val())
	// $('table input[name=password]').val()
	if(this.value != $('table input[name=password]').val()){
		$(this).parent().addClass('inError');
		password1 = false;
		return;
	}
	$(this).parent().removeClass('inError');
	password1 = true;
});

$('table input[name=submit]').click(function(){
	// console.log(this);
	$('table input').blur();
	// console.log()
	checkbox = $('table input[name=checked]').prop('checked')
	// console.log(checkbox)
	password1 = ($('table input[name=password1]').val() == $('table input[name=password]').val());
	console.log(password1)
	if(username && phonenumber && verificationcode && password && password1 && checkbox){
		console.log('success')
	}
})

// 显示服务条款
$('.register-main td>p>span').click(function(){
	if($('.ctrled').css('display') == 'none'){$('.ctrled').show(); return;};
	$('.ctrled').hide();
})


