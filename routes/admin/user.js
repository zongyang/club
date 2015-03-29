var common = require('../common.js');
var User = require('../../models/user');



function router_user(router) {
	//人员列表的显示
	router.get('/admin/users', function(req, res, next) {
		var mokuai = 'admin';
		var path = 'admin/admin';

		(new User).find({}, function(err, docs) {
			var downpre = '/admin/users/download'; //下载地址的前缀
			var page = common.pageFlag();
			page.users = true;

			res.render(path, {
				mokuai: mokuai,
				users: docs,
				downpre: downpre,
				page: page
			});
		})
	});

	//文件下载(在windons路径可能会有问题)
	router.get('/admin/users/download', function(req, res, next) {
		var path = process.cwd() + req.query.path;
		//res.send(req.query);
		res.download(path);
	});
}
module.exports = router_user;