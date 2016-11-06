'use strict';
const Calendar = require('./db/mongo').CalendarModel;

exports.saveNewArrivalDate = arg => Calendar.insert(arg);

exports.getNewArrivalLatest = () => Calendar.find({}, null, {sort: {createdAt: -1}, limit: 5});