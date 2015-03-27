var express = require('express');
var router = express.Router();
var index=require('./index.js');
var admin=require('./admin.js');
/* GET home page. */

index(router);
admin(router);

router.get('/news', function(req, res, next) {
	var mokuai='news';
	res.render('news/news', {mokuai:mokuai });
});
router.get('/projects', function(req, res, next) {
	var mokuai='/projects';
	res.render('projects/projects', {mokuai:mokuai });
});
router.get('/admin_login', function(req, res, next) {
	var mokuai='admin_login';
	res.render('admin_login/admin_login', {mokuai:mokuai });
});
module.exports = router;
