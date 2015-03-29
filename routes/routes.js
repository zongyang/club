var express = require('express');
var router = express.Router();
var index=require('./index.js');
var user=require('./admin/user.js');
var project=require('./admin/project.js');
var news=require('./admin/news.js');
/* GET home page. */

index(router);
project(router);
user(router);
news(router);

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
