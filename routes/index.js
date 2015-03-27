var User = require('../models/user.js');
var common=require('./common.js');

function index(router) {
    //首页
    router.get('/index',function(req, res, next) {
        var mokuai = 'index';
        res.render('index/index', {mokuai:mokuai });
    });
    //报名
    router.post('/index/signup',function(req, res, next) {
       var user= new User(req.body);
       //检测
       var result=user.check(); 
       if(result!==null){
       	 res.send({success:false,info:'报名失败：'+result});
       	 return;
       }
       //检测用户是否已存在
       user.findOne({name:user.user.name},function(doc){
        if(doc!=null){
          res.send({success:false,info:'报名失败：改用户已存在！'});
          return;
        }
        user.insert(function(err,doc){
          if(err){
           res.send({success:false,info:'报名失败：'+err});
           return;
          }
          res.send({success:true,info:doc.name});
        })
       })
    });
    //文件上传
    router.post('/index/upload',function(req,res,next){
      if(req.files.length==0){
        res.send('没有文件');
        return;
      }
      res.send('上传完毕');
    });
}
module.exports = index;