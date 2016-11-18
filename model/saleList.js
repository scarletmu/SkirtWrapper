'use strict';
const SaleList = require('./db/mongo').SaleListModel;

exports.saveSaleList = args => SaleList.insertMany(args);

exports.updateSingleSaleList = arg => SaleList.update({id: arg.id}, arg); 

exports.getSaleList = (page, Brand) => {
  let head = (page - 1) * 10;
  if(typeof Brand !== 'undefined'){
    return SaleList.find({Brand: Brand}, null, {skip: head, limit: 10});
  }else{
    return SaleList.find({}, null, {skip: head, limit: 10});
  }
};

exports.cleanSaleList = Brand => {
  Brand = Brand || 'default';
  return SaleList.remove({Brand: Brand});
};
