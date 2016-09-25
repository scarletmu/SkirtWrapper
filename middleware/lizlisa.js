/**
 * Created by Mu on 16/2/16.
 */
'use strict';
const saleList = require('../model/lizlisa');
const request = require('request');
const cheerio = require('cheerio');
const url = require('../utils/url');
const title = 'http://www.tokyokawaiilife.jp';
let me = this;
me.saleList = () => {
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

me.newArrival = (URL) => {
  let target = URL? URL: url.lizlisa.newArrival;
  return new Promise((resolve, reject) => {
    request(target, function (err, response, body) {
      if(err){
        reject(err);
      }
      let $ = cheerio.load(body);
      let list = me.readList($);
      resolve(list);
    });
  })
}

me.readArrivalNavList = ($) => {
  let result = [];
  let list = $('.nav-list').children();
  for (let i = 0; i < list.length; i++) {
    let url = title + list[i].children[1].attribs.href;
    let date = list[i].children[1].children[0].data;
    let singleItem = {
      url:url,
      date: date
    }
    result.push(singleItem);
  }
  // return new Promise((resolve, reject) => {
  //   request(url.lizlisa.newArrival, function (err, response, body) {
  //     if(err){
  //       reject(err);
  //     }
  //     let $ = cheerio.load(body);
  //     let list = me.readList($);
  //     resolve(list);
  //   });
  // })
}

me.readList = ($) => {
  let result = [];
  //ul下所有li节点
  let list = $('.sectionContent .row-fluid').children();
  for (let i = 0; i < list.length; i++) {
    let figure = list[i].children[1];
    let itemText = list[i].children[3];
    let url = title + figure.children[0].attribs.href;
    let singleItem = {};
    //Price子节点区分
    if(itemText.children[7].children[1]){
      singleItem = {
        Url: url,
        Avatar: figure.children[0].children[1].attribs.src,
        Name:itemText.children[5].children[0].children[0].data,
        Price:itemText.children[7].children[1].children[0].data,
        SalePrice:itemText.children[7].children[3].children[0].data
      };
    }else{
      singleItem = {
        Url: url,
        Avatar: figure.children[0].children[1].attribs.src,
        Name:itemText.children[5].children[0].children[0].data,
        Price:itemText.children[7].children[0].data,
      };
    }    
    result.push(singleItem);
  }
  return result;
};

module.exports = {
  saleList: me.saleList,
  newArrival: me.newArrival,
  readArrivalNavList: me.readArrivalNavList
}
