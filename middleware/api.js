'use strict';
const newListModel = require('../model/newList');
const saleListModel = require('../model/saleList');
const calendarModel = require('../model/calendar');

/**
 * 按日期获取上新
 * @param date (ObjectId)
 * @param page 分页页数
 */
exports.getNewArrivalByDay = (req, res) => {
  let { date, page } = req.query;
  let brand = req.params.brand;
  if(typeof date === 'undefined'){
    return res.status(500).json({error: 'Empty Date'});
  }
  newListModel.getByDay(date, page, brand) 
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  })
};

/**
 * 获取Sale列表
 * @param page
 */
exports.getSaleList = (req, res) => {
  let page = req.query.page || 1;
  let brand = req.params.brand;
  saleListModel.getSaleList(page, brand)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  })
}

/**
 * 获取日期列表
 */
exports.getCalendar = (req, res) => {
  calendarModel.getMonth()
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  })
}