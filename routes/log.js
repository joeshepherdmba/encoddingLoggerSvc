var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
 var log = req.body;
 console.log(log);
})