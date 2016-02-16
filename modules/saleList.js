/**
 * Created by Mu on 16/2/16.
 */
'use strict';
var saleList = require('../model/saleList');
var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

exports.parse = function () {
  var result = [],
    deffered = Q.defer();
  request('http://www.tokyokawaiilife.jp/shop/liz-lisa/item/list/stock_available/1/category_id/102/page/1', function (err, response, body) {
    if (err) {
      console.log(err);
      deffered.reject(err);
    } else if (response && body) {
      let $ = cheerio.load(body);
      let list = $('.sectionContent .row-fluid').children();
      let page = $('.pageNumber').children();
      console.log(page);
      let count = list.length;
      for (let i = 0; i < count; i++) {
        let item = list[i].children;
        let info = item[3].children;
        let single = {
          Name:info[5].children[0].children[0].data,
          Image:item[1].children[0].children[1].attribs.src,
          Price:info[7].children[1].children[0].data,
          SalePrice:info[7].children[3].children[0].data
        };
        result.push(single);
      }
      deffered.resolve(result);
    }
    return saleList.save(result)
      .then(function(data){
        return deffered.promise;
      })
  });
};
