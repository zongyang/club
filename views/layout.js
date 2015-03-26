function msgAlert(title,info,ok,cancle){
	var m=$('.ui.small.modal');
	m.find('.header p').text(title);
	m.find('.content p').text(info);
	m.modal('show');
}
function initMsgAlert(){
	$('.ui.small.modal').modal();
}
function checkEmail(str){
	var reg=new RegExp(/^\w+@\w+\.\w+$/);
	return reg.test(str);
}
