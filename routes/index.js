var User = require('../models/user.js');
var common=require('./common.js');

function index(router) {
    router.get('/index',function(req, res, next) {
        var mokuai = 'index';
        res.render('index/index', {mokuai:mokuai });
    });
    router.post('/index/signup',function(req, res, next) {
       var user= new User(req.body);
       //检测
       var result=user.check(); 
       if(result!==null){
       	 res.send({success:false,info:'报名失败：'+result});
       	 return;
       }
       //插入数据库
       user.save(function(info,user){
       	console.log(info);
       	console.log(user);
       });
       res.send({success:false,info:'报名成功！'});
    });
}
module.exports = index;