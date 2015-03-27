$(function(){
	init();
})

function init(){
	if($('#users').length>0){
		initUsers();
	}
}

function initUsers(){
	return;
	var links=$('#users .resume');
	var pre=window.location.protocol+'//'+window.location.host;
	links.each(function(index,el){
		var old=$(el).attr('href');
		$(el).attr('href',pre+old);
	});
}