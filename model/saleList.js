'use strict';
const SaleList = require('./db/mongo').SaleListModel;

exports.saveSaleList = args => SaleList.insertMany(args);

exports.updateSingleSaleList = arg => SaleList.update({id: arg.id}, arg); 

exports.getSaleList = page => {
  let head = (page - 1) * 10;
  return SaleList.find({}, null, {skip: head, limit: 10});
};

exports.cleanSaleList = brand => {
  brand = brand || 'default';
  return SaleList.remove({Brand: brand});
};
