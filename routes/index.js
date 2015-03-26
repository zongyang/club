var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var mokuai='index';
	res.render('index', {mokuai:mokuai });
});
router.get('/news', function(req, res, next) {
	var mokuai='news';
	res.render('news', {mokuai:mokuai });
});
router.get('/projects', function(req, res, next) {
	var mokuai='projects';
	res.render('projects', {mokuai:mokuai });
});
router.get('/admin_login', function(req, res, next) {
	var mokuai='admin_login';
	res.render('admin_login', {mokuai:mokuai });
});
module.exports = router;
