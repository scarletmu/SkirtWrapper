'use strict';
const NewList = require('./db/mongo').NewListModel;

exports.insertMany = args => NewList.insertMany(args);

exports.updateSingleNewList = arg => NewList.update({id: arg.id}, arg);

exports.getByDay = (date, page, Brand) => {
  let skip = (page - 1) * 10;
  if(typeof Brand !== 'undefined'){
    return NewList.find({Date: date, Brand: Brand}, '', {skip: skip, limit: 10});
  }else{
    return NewList.find({Date: date}, '', {skip: skip, limit: 10});
  }
}
