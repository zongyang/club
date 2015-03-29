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
	$('table').tablesort();
}

//初始化人员列表
function initUsers() {

}

//初始化项目列表
function initProjects() {
	proEditAlert().init();
	//编辑
	$('#projects table i.edit').click(function() {
		//标记行
		$(this).addClass('active');
		$('#projects table i.edit').not($(this)).removeClass('active');

		var modal = proEditAlert();
		var obj = getDataByActive();
		modal.init(editProject);

		modal.show('修改项目', obj.name, obj.peoples, obj.info, obj.content);
	});
	//添加
	$('#projects .add').click(function() {
		var modal = proEditAlert();
		modal.init(addProject);
		modal.show('添加新项目');
	});
}

function getDataByActive() {
		var active = $('#projects table i.edit.active');
		var index = $('#projects table i.edit').index(active);
		var row = $('#projects table tbody tr:nth(' + index + ')')
		var obj = {};

		obj.index = index;
		obj.row=row;
		obj.id = row.find('td.id').text();
		obj.name = row.find('td.name').text();
		obj.peoples = row.find('td.peoples').text();
		obj.info = row.find('td.info').text();
		obj.content = row.find('td.content').text();
		return obj;
	}
	//添加项目提交
function addProject() {
		var obj = proEditAlert().get();
		if (obj.name == '') {
			msgAlert('提示', '项目名不能为空！');
			return;
		}
		$.ajax({
			url: 'projects/add',
			data: obj,
			type: 'post',
			success: function(data) {
				msgAlert('提示', data.info);
				if (!data.success) {
					return;
				}

				var tbody = $('#projects tbody');
				var tr = '<tr>';
				//添加一行
				for (var pro in obj) {
					if (pro !== 'content') {
						tr += '<td>' + obj[pro] + '</td>';
					} else {
						tr += '<td class="hidden">' + obj[pro] + '</td>';
					}
				}
				tr += '<td class="id hidden">' + data.id + '</td>';
				tr += '<td><i class="close icon"></i><i class="edit icon"></i></td>';
				tr += '</tr>';

				tbody.append(tr);

			}
		});
	}
	//编辑项目提交
function editProject() {
		var obj = proEditAlert().get();
		var rowObj=getDataByActive();
		obj.id = rowObj.id;
		if (obj.name == '' || obj.id == '') {
			msgAlert('提示', '项目名不能为空！');
			return;
		}
		$.ajax({
			url: 'projects/edit',
			data: obj,
			type: 'post',
			success: function(data) {
				msgAlert('提示', data.info);
				if (!data.success) {
					return;
				}
				rowObj.row.find('.name').text(obj.name);
				rowObj.row.find('.peoples').text(obj.peoples);
				rowObj.row.find('.info').text(obj.info);
				rowObj.row.find('.content').text(obj.content);
			}
		});
	}
	//项目编辑弹出层
function proEditAlert() {
	var modal = $('.projects.modal');
	return {
		self: modal,
		init: function(onApprove, onDeny) {
			var that = this;
			modal.modal({
				onApprove: onApprove,
				onDeny: onDeny
			});
		},
		title: modal.find('.title'),
		name: modal.find('.name input'),
		peoples: modal.find('.peoples input'),
		info: modal.find('.info input'),
		content: modal.find('.content textarea'),
		show: function(title, name, peoples, info, content) {
			//初始化
			this.title.text('');
			this.name.val('');
			this.peoples.val('');
			this.info.val('');
			this.content.val('');

			if (title) {
				this.title.text(title);
			}
			if (name) {
				this.name.val(name);
			}
			if (peoples) {
				this.peoples.val(peoples);
			}
			if (info) {
				this.info.val(info);
			}
			if (content) {
				this.content.val(content);
			}
			this.self.modal('show');
		},
		get: function() {
			return {
				name: this.name.val(),
				peoples: this.peoples.val(),
				info: this.info.val(),
				content: this.content.val()
			}
		}
	}
}