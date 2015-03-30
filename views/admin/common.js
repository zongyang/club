$(function() {
	init();
})

function init() {
	if ($('#users').length > 0) {
		initUsers();
	}
	if ($('#projects').length > 0) {
		initProjects();
	}
	if($('#news').length>0){
		initNews();
	}
	if($('#introduce').length>0){
		initIntroduce();
	}
	$('table').tablesort();
}