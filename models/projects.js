var db=require('./db.js');
var settings=require('../settings.js');

function Project(project){
	this.project=project;	
}
//项目的collection
User.prototype.collection=db.get('projects');
//存储项目信息
User.prototype.insert=function(callback){
	this.collection.insert(this.project,function(err,doc){
		if (err) {
			callback(err);
			return;
		}
		callback(null,doc);
	})
};
//读取项目用户信息
User.prototype.find=function(obj,callback){
	this.collection.find(obj,function(err,docs){
		if(err){
			callback(err,null);
			return;
		}
		callback(null,docs);
	})
}
//读取项目用户信息
User.prototype.findOne=function(obj,callback){
	this.collection.findOne(obj).on('success',function(doc){
		callback(doc);
	});
}
//项目更新操作
User.prototype.update=function(src,dst,callback){
	this.collection.update(src,dst,function(){
		if(callback)
			callback()
	});
}

//检验
User.prototype.check=function(){
	if(this.project.name==''){
		return {success:false,info:'项目名不能为空！'};
	}
	return {success:true,info:''};
}


module.exports=User;