var common=require('./common.js');
var User=require('../models/user');

function admin(router) {
    //人员列表的显示
    router.get('/admin/users',function(req, res, next) {
        var mokuai = 'admin';
        var path='admin/admin';
        (new User).find({},function(err,docs){
            var downpre='/admin/users/download';//下载地址的前缀
        	res.render(path, {mokuai:mokuai,users:docs,downpre:downpre});
        })    
    });
    //项目列表的显示
    router.get('/admin/projects',function(req, res, next) {
        var mokuai = 'admin';
        var path='admin/admin';
        res.render(path, {mokuai:mokuai});
    });
    //项目的添加
    router.get('/admin/projects/add',function(req, res, next) {
        res.send({success:true,info:'添加成功！'});
    });
    //文件下载(在windons路径可能会有问题)
    router.get('/admin/users/download',function(req,res,next){
        var path=process.cwd()+req.query.path;
        //res.send(req.query);
        res.download(path);
    });
}
module.exports = admin;