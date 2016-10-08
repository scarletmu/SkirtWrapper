'use strict';
const SaleList = require('./db/mongo').SaleListModel;

exports.saveSaleList = function(args){
  return SaleList.insertMany(args);
};

exports.updateSingleSaleList = function(arg){
  return SaleList.update({id: arg.id}, arg);
};

exports.getSaleList = function(page){
  let head = (page - 1) * 10;
  return SaleList.find({}, null, {skip: head, limit: 10});
}
