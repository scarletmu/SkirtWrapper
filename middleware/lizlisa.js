'use strict';
const request = require('request');
const cheerio = require('cheerio');
const url = require('../utils/url');
const title = 'http://www.tokyokawaiilife.jp';
const Redis = require('../model/db/redis');
const newListModel = require('../model/newList');
const saleListModel = require('../model/saleList');

let me = this;

//获取Sale列表
me.saleList = () => {
  return saleListModel.cleanSaleList('LizLisa')
  .then(() => {
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
  })
  .then((data) => {
    return saleListModel.saveSaleList(data);
  })
};

//获取上新列表
me.newArrival = (URL) => {
  let target = URL? URL: url.lizlisa.newArrival;
  return new Promise((resolve, reject) => {
    request(target, function (err, response, body) {
      if(err){
        reject(err);
      }
      let $ = cheerio.load(body);
      let list = me.readList($);
      let navList = me.readArrivalNavList($);
      resolve({list, navList});
    });
  })
  .then((data) => {
    /**Redis储存上新日期列表,用以判断是否需要更新数据库
     * Key: newArrivalList
     * type: List
     */
    return Redis.lindexAsync('newArrivalList', 0)
    .then((head) => {
      if(head && head == data.navList){
        return Promise.resolve();
      }else{
        return Promise.all([
          newListModel.saveNewList(data.list),
          Redis.lpush('newArrivalList', data.navList)
        ])
      }
    })
  })
}
//解析部分
//解析左侧日期导航返回最新一条
me.readArrivalNavList = ($) => {
  let result = [];
  let list = $('.nav-list').children();
  // for (let i = 0; i < list.length; i++) {
  //   let url = title + list[i].children[1].attribs.href;
  //   let date = list[i].children[1].children[0].data;
  //   let singleItem = {
  //     date: date
  //   }
  //   result.push(singleItem);
  // }
  let date = list[0].children[1].children[0].data.replace(/\r\n/g,'');
  return date;
}
//解析主列表
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
        Name:itemText.children[5].children[0].children[0].data.replace(/\r\n/g,''),
        Price:itemText.children[7].children[1].children[0].data.replace(/\r\n/g,''),
        SalePrice:itemText.children[7].children[3].children[0].data.replace(/\r\n/g,''),
        Brand: 'LizLisa'
      };
    }else{
      singleItem = {
        Url: url,
        Avatar: figure.children[0].children[1].attribs.src,
        Name:itemText.children[5].children[0].children[0].data.replace(/\r\n/g,''),
        Price:itemText.children[7].children[0].data.replace(/\r\n/g,''),
        Brand: 'LizLisa'
      };
    }    
    result.push(singleItem);
  }
  return result;
};
//路由
me.getSaleList = () => {
  return saleListModel.getSaleList(1);
}

module.exports = {
  getSaleList: me.getSaleList,
  //save for test , remove later
  saleList: me.saleList,
  newArrival: me.newArrival,
  readArrivalNavList: me.readArrivalNavList
}
