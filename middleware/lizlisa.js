/**
 * Created by Mu on 16/2/16.
 */
'use strict';
const saleList = require('../model/lizlisa');
const request = require('request');
const cheerio = require('cheerio');
const url = require('../utils/url');

let me = this;
me.saleList = function () {
  return new Promise((resolve, reject) => {
    request(url.lizlisa.saleList, function (err, response, body) {
      if(err){
        reject(err);
      }
      let $ = cheerio.load(body);
      let list = me.readList($);
      resolve(list);
    });
  })
};



me.readList = function ($){
  let result = [];
  //ul下所有li节点
  let list = $('.sectionContent .row-fluid').children();
  for (let i = 0; i < list.length; i++) {
    let figure = list[i].children[1];
    let itemText = list[i].children[3];
    let url = 'http://www.tokyokawaiilife.jp' + figure.children[0].attribs.href;
    let singleItem = {
      Url: url,
      Avatar: figure.children[0].children[1].attribs.src,
      Name:itemText.children[5].children[0].children[0].data,
      Price:itemText.children[7].children[1].children[0].data,
      SalePrice:itemText.children[7].children[3].children[0].data
    };
    result.push(singleItem);
  }
  return result;
};

module.exports = {
  saleList: me.saleList
}
