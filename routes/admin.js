var common = require('./common.js');
var User = require('../models/user');
var Project = require('../models/project');

function admin(router) {
    //人员列表的显示
    router.get('/admin/users', function(req, res, next) {
        var mokuai = 'admin';
        var path = 'admin/admin';

        (new User).find({}, function(err, docs) {
            var downpre = '/admin/users/download'; //下载地址的前缀
            res.render(path, {
                mokuai: mokuai,
                users: docs,
                downpre: downpre
            });
        })
    });
    //项目列表的显示
    router.get('/admin/projects', function(req, res, next) {
        var mokuai = 'admin';
        var path = 'admin/admin';

        (new Project).find({}, function(err, docs) {
            console.log(docs);
            res.render(path, {
                mokuai: mokuai,
                projects:docs
            });
        });

    });
    //项目的添加
    router.post('/admin/projects/add', function(req, res, next) {
        var project = new Project(req.body);
        //检测
        var result = project.check();
        if (!result.success) {
            res.send({
                success: false,
                info: result.info
            });
            return;
        }
        //检测重复
        project.findOne({
            name: project.obj.name
        }, function(doc) {
            if (doc != null) {
                res.send({
                    success: false,
                    info: '改项目名已经存在！'
                });
                return;
            }
            //插入
            project.insert(function(err, doc) {
                if (err) {
                    res.send({
                        success: false,
                        info: err
                    });
                    return;
                }
                res.send({
                    success: true,
                    info: '项目添加成功！'
                });
            });
        });

    });
    //文件下载(在windons路径可能会有问题)
    router.get('/admin/users/download', function(req, res, next) {
        var path = process.cwd() + req.query.path;
        //res.send(req.query);
        res.download(path);
    });
}
module.exports = admin;