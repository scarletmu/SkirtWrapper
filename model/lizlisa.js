/**
 * Created by Mu on 16/2/16.
 */
'use strict';
var NewList = require('./db/mongo').NewListModel;

exports.saveNewList = function(args){
  return NewList.insertMany(args);
};
