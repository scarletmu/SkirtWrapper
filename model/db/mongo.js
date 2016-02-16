/**
 * Created by Mu on 16/2/16.
 */
var mongoose = require('mongoose');
var Config = require('../../config');

mongoose.connect('mongodb://' + Config.mongodb.host + '/' + Config.mongodb.db, {
  server: {
    poolSize: 50
  }
});

const NewListSchma = new mongoose.Schema({
  Name:String,
  Image:String,
  Price:String,
  SalePrice:String
});

exports.NewListModel = mongoose.model('newList',NewListSchma);

