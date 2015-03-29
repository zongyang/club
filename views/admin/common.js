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
	$('table').tablesort();
}