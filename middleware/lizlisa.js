'use strict';
const request = require('request');
const cheerio = require('cheerio');
const url = require('../utils/url');
const network = require('./network');
const co = require('co');
const Promise = require('bluebird');
const _ = require('lodash');
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

//刷新操作

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
/**
 * DB添加上新列表
 * @param 日期
 * @param 当日数据
 * @return Promise(创建结果)
 */
me.createNewArrival = (day, list) => {
  return co(function* (){
    let newDate = yield calendarModel.create({Date: day});
    let updated = list.map((e) => {
      e.Date = newDate._id;
      return e;
    })
    return yield newListModel.insertMany(updated);
  })
}

/**
 * 更新上新列表
 * @param index(即网页后缀的index,默认为0)
 * @return Promise(创建结果)
 */
me.updateNewArrival = (index = 0) => {
  let target = url.lizlisa.newArrival.concat(index);
  return co(function* (){
    let body = yield network.requestBody(target, 'GET');
    let $ = cheerio.load(body), list = me.readList($), navList = me.readArrivalNavList($);
    let dblatest = yield calendarModel.getLatest();
    if(navList[0] != dblatest[0].date && navList[1] == dblatest[0].date){
      return me.createNewArrival(navList[0], list);
    }else if((navList[0] != dblatest[0].date && navList[1] == dblatest[0].date) || dblatest.length == 0){
      me.init();
      return yield Promise.resolve('Start Re-Init');
    }else{
      //已经是最新
      return yield Promise.resolve('Already Latest');
    }
  })
}

//初始化
me.init = () => {
  co(function* (){
    let dblatest = yield calendarModel.getLatest();
    let latestDate = dblatest.map((e) => e.Date);
    let body = yield network.requestBody(url.lizlisa.newArrival, 'GET');
    let root$ = cheerio.load(body), rootNavList = me.readArrivalNavList(root$);
    if(dblatest.length == 0){
      //初始化
      console.log('Start Init');
      for(let i = 0; i < rootNavList.length; i++){
        let target = url.lizlisa.newArrival.concat(i);
        let body = yield network.requestBody(target, 'GET');
        let $ = cheerio.load(body), list = me.readList($);
        yield me.createNewArrival(rootNavList[i], list);        
      }
      return yield Promise.resolve('Init Success');
    }else{
      //多条不匹配重匹配
      console.log('Start Re-Match');
      let diff = _.difference(rootNavList, latestDate);
      console.log('Difference');
      console.log(diff);
      for(let i = 0; i < diff.length; i++){
        let pos = rootNavList.indexOf(diff[i]);
        let target = url.lizlisa.newArrival.concat(pos);
        console.log(target);
        let body = yield network.requestBody(target, 'GET');
        let $ = cheerio.load(body), list = me.readList($);
        yield me.createNewArrival(diff[i], list);        
      }
      return yield Promise.resolve('Rematch Success');
    }
  })
  .then((suc) => {
    console.log(suc);
  })
  .catch((err) => {
    console.error(err);
    setTimeout(() => {
      me.init();
    }, 15 * 1000);
  })
};


//解析部分

//解析左侧日期导航
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
    if(itemText.children.length == 7){
      singleItem = {
        Url: url,
        Avatar: figure.children[0].children[1].attribs.src,
        Name:itemText.children[3].children[0].children[0].data.replace(/\r\n/g,''),
        Price:itemText.children[5].children[0].data.replace(/\r\n/g,''),
        Brand: 'LizLisa'
      } 
    }else if(itemText.children[7].children.length !== 1){
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
  updateSaleList: me.updateSaleList,
  updateNewArrival: me.updateNewArrival,
  init: me.init
}
