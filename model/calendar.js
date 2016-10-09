'use strict';
const Calendar = require('./db/mongo').CalendarModel;

exports.saveNewArrivalDate = arg => Calendar.insert(arg);

exports.getNewArrivalDate = page => {
  let head = (page -  1) * 10;
  return Calendar.find({}, null, {skip: head, limit: 10, sort: {createdAt: -1}});
}

exports.getNewArrivalLatest = () => Calendar.find({}, null, {sort: {createdAt: -1}})