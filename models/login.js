var db=require('./db.js');
var common=require('./common.js');
var common1=require('../routes/common.js');
function Login(login){
	this.obj=login;
}

Login.prototype.collection=db.get('admin');

Login.prototype.insert=common.insert;

Login.prototype.find=common.find;

Login.prototype.findOne=common.findOne;

Login.prototype.findAndModify=common.findAndModify;
Login.prototype.remove=common.remove;
Login.prototype.check=function(){
	if(this.obj==null){
		return {success:false,info:'拜托请不要这样！'}
	}
	if(common1.isEmpty(this.obj.password)){
		return {success:false,info:'密码不能为空！'};
	}
	if(common1.isEmpty(this.obj.name)){
		return {success:false,info:'管理员名不能为空！'};
	}
	return {success:true}
}

module.exports=Login;