'use strict';
var express = require('express');
var router = express.Router();
var newList = require('../modules/lizlisa');
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  let params = new Array();
  params.push('wt=json');
  params.push('fq=bd%3AAL040');
  params.push('fq=scls%3An_usual');
  params.push('fq=-stnum%3A0');
  params.push('fq=-icon%3Arestock');
  params.push('rows=40');
  params.push('sort=fsdt%20desc');
  params.push('facet=true');
  params.push('facet.field=cc1');
  let url = 'http://ailand-store.jp/ise/select?'+params.join('&');
  console.log(url);
  request(url,function(err,response,body){
    let data = JSON.parse(body);
    let itemList = data.response.docs;
    console.log(itemList);
    res.status(200).end();
  })
});

module.exports = router;
