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
//初始化人员列表
function initUsers(){
	
}
//初始化项目列表
function initProjects(){
	proEditAlert().init();
	//编辑
	$('#projects table i.edit').click(function(){
		proEditAlert().show();
	});
	//添加
	$('#projects .add').click(function(){
		proEditAlert().show('添加新项目');
	})
}

//项目编辑弹出层
function proEditAlert(onApprove,onDeny){
	return {
		self:$('.projects.modal'),
		init:function(onApprove,onDeny){
			this.self.modal({
				onApprove:function(){
					if(onApprove)
						onApprove();
				},
				onDeny:function(){
					if(onDeny)
						onDeny()
				}
			});
		},
		show:function(title,name,peoples,info,content){
			var form=this.self;
			var obj={
				title:form.find('.title'),
				name:form.find('.name input'),
				peoples:form.find('.peoples input'),
				info:form.find('.info input'),
				content:form.find('.content textarea')
			}
			//初始化
			obj.title.text('');
			obj.name.val('');
			obj.peoples.val('');
			obj.info.val('');
			obj.content.val('');

			if(title){
				obj.title.text(title);
			}
			if(name){
				obj.name.val(name);
			}
			if(peoples){
				obj.peoples.val(peoples);
			}
			if(info){
				obj.info.val(info);
			}
			if(content){
				obj.content.val(content);
			}

			form.modal('show');
		}
	}
}


