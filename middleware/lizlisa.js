/**
 * Created by Mu on 16/2/16.
 */
'use strict';
const saleList = require('../model/lizlisa');
const request = require('request');
const cheerio = require('cheerio');
const url = require('../utils/url');

exports.updateSaleList = function () {
  let result = [];
  request(url.lizlisa.saleList + '1', function (err, response, body) {
    let $ = cheerio.load(body);
    let list = $('.sectionContent .row-fluid').children();
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
    saleList.saveNewList(result)
    .then((data) => {
      console.log('save success');
      console.log(data);
    }).catch((err) => {
      console.log('save error');
      console.error(err);
    });
  });
};


exports.updateNewList = function(){
  let result = [];
  for(let i = 0; i++; i < 5){
    request(url.lizlisa.newList + i, (err, res, body) => {
      let $ = cheerio.load(body);
    })
  }
}
