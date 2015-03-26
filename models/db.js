var settings=require('../settings');
var mongodb=require('mongodb');
var DB=mongodb.Db;
var Connection=mongodb.Connection;
var Server=mongodb.Server;

var db=new DB(settings.db,new Server(settings.host,settings.port),{safe:true});

module.exports=db;
