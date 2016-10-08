'use strict';
const NewList = require('./db/mongo').NewListModel;

exports.saveNewList = function(args){
  return NewList.insertMany(args);
};

exports.updateSingleNewList = function(arg){
  return NewList.update({id: arg.id}, arg);
};
