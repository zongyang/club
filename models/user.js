var mongodb=require('./db');

function User(user){
	this.user=user;
	for(var pro in user){
		this[pro]=user[pro];
	}
}
module.exports=User;
User.prototype.dbName='users';
//存储用户信息
User.prototype.save=function(callback){
	var user=this.user;
	var dbName=this.dbName;
	//打开数据库
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		//读取users集合
		db.collection(dbName,function(err,collection){
			if(err){
				mongodb.close();
				return callback(err);
			}
			//插入数据
			collection.insert(user,{
				safe:true
			},function(err,user){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(null,user.ops[0]);//成功！err为null，并返回存储后的用户文档
			})
		})
	});
};
//读取用户信息
User.prototype.get=function(name,callback){
	var dbName=this.dbName;
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection(dbName,function(err,collection){
			if(err){
				mongodb.close();
				return callback(err);
			}
			collection.findOne({name:name},function(err,user){
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null,user);//成功
			});
		});
	});
}
//检验(现在只做空值的检查)
User.prototype.check=function(){
	for(var pro in this){
		if(this[pro]===''){
			return pro;
		}
	}
	return null;
}