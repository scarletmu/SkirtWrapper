'use strict';
var express = require('express');
var router = express.Router();
var newList = require('../modules/lizlisa');
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://ailand-store.jp/ap/s/s?rows=40&fq=bd:AL040&fq=scls:n_usual&sort=fsdt+desc&fq=-stnum:0&fq=-icon:restock',function(err,response,body){
    let $ = cheerio.load(body);
    let list = $('#itemContainer').children();
    console.log(list);
    res.status(200).end();
  })
});

module.exports = router;
