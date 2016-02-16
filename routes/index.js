'use strict';
var express = require('express');
var router = express.Router();
var newList = require('../modules/saleList');
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  newList.parse().then(function(data){
    res.render('index', { title: '爬虫测试' ,data:data});
  })
});
module.exports = router;
