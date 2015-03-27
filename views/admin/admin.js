$(function(){
	init();
})

function init(){
	if($('#users').length>0){
		initUsers();
	}
	if($('#projects').length>0){
		initProjects();
	}
}

function initUsers(){
	
}
function initProjects(){
	$('#projects .modal').modal();
	$('#projects table i.edit').click(function(){
		$('.projects.modal').modal('show');
	});
}