'use strict';
const request = require('request');
const cheerio = require('cheerio');
const url = require('../utils/url');
const network = require('./network');
const co = require('co');
const title = 'http://www.tokyokawaiilife.jp';
//DB
const Redis = require('../model/db/redis');
const newListModel = require('../model/newList');
const saleListModel = require('../model/saleList');
const calendarModel = require('../model/calendar');

let me = this;
//去换行符
let clear = (str) => {
  return str.replace(/\r\n/g,'');
}

//获取Sale列表
me.updateSaleList = () => {
  return co(function* (){
    yield saleListModel.cleanSaleList('LizLisa');
    let body = yield network.requestBody(url.lizlisa.saleList, 'GET');
    let $ = cheerio.load(body);
    let list = me.readList($);
    return yield saleListModel.saveSaleList(list);
  })
};

//获取上新列表
me.newArrival = () => {
  let target = url.lizlisa.newArrival.concat('0');
  return co(function* (){
    let body = yield network.requestBody(target, 'GET');
    let $ = cheerio.load(body), list = me.readList($), navList = me.readArrivalNavList($);
    let dblatest = yield calendarModel.getLatest();
    if(navList[0] != dblatest[0].date && navList[1] == dblatest[0].date){
      //日期需要更新
      let newDate = yield calendarModel.create({Date: navList[0]});
      let updated = list.map((e) => {
        e.Date = newDate._id;
        return e;
      });
      return yield newListModel.insertMany(updated);
    }else{
      //已经是最新
      return yield Promise.resolve('Already Latest');
    }
  })
}

//解析部分
//解析左侧日期导航返回最新一条
me.readArrivalNavList = ($) => {
  let result = [];
  let list = $('.nav-list').children();
  for (let i = 0; i < list.length; i++) {
    let str = clear(list[i].children[1].children[0].data);
    let date = str.slice(0, 10).trim();
    result.push(date);
  }
  return result;
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


module.exports = {
  getSaleList: me.getSaleList,
  //save for test , remove later
  saleList: me.saleList,
  newArrival: me.newArrival,
  readArrivalNavList: me.readArrivalNavList,
  getCalendarList: me.getCalendarList
}
