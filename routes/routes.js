var express = require('express');
var router = express.Router();
var index=require('./index.js');
var admin=require('./admin/admin.js');
/* GET home page. */

index(router);
admin(router);




module.exports = router;
