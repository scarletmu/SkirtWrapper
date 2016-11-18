'use strict';
const Calendar = require('./db/mongo').CalendarModel;

exports.create = arg => Calendar.create(arg);
exports.insertMany = arg => Calendar.insertMany(arg);
exports.getLatest = () => Calendar.find({}, null, {sort: {createdAt: -1}, limit: 5});
exports.getMonth = () => Calendar.find({}, null, {limit: 30});