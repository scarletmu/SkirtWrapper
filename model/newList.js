'use strict';
const NewList = require('./db/mongo').NewListModel;

exports.saveNewList = args => NewList.insertMany(args);

exports.updateSingleNewList = arg => NewList.update({id: arg.id}, arg);
