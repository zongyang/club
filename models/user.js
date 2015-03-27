var db=require('./db.js');
var settings=require('../settings.js');

function User(user){
	if(user){
		user.file=settings.dest.substr(1)+'/'+user.name+getExet(user.file);
	}
	this.user=user;	
}
//用户的collection
User.prototype.collection=db.get('users');
//存储用户信息
User.prototype.insert=function(callback){
	this.collection.insert(this.user,function(err,doc){
		if (err) {
			callback(err);
			return;
		}
		callback(null,doc);
	})
};
//读取所有用户信息
User.prototype.find=function(obj,callback){
	this.collection.find(obj,function(err,docs){
		if(err){
			callback(err,null);
			return;
		}
		callback(null,docs);
	})
}
//读取一条用户信息
User.prototype.findOne=function(obj,callback){
	this.collection.findOne(obj).on('success',function(doc){
		callback(doc);
	});
}
//更新操作
User.prototype.update=function(src,dst,callback){
	this.collection.update(src,dst,function(){
		if(callback)
			callback()
	});
}

//检验(现在只做空值的检查)
User.prototype.check=function(){
	for(var pro in this.user){
		if(this.user[pro]===''){
			return pro;
		}
	}
	return null;
}
function getExet(str){
	return str.substr(str.lastIndexOf('.'));
}

module.exports=User;