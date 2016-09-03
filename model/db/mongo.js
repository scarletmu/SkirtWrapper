/**
 * Created by Mu on 16/2/16.
 */
var mongoose = require('mongoose');
var Config = require('../../config');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://' + Config.mongodb.host + '/' + Config.mongodb.db, {
  server: {
    poolSize: 50
  }
});

const SaleListSchema = new mongoose.Schema({
  Name:String,
  Image:String,
  Price:String,
  SalePrice:String
});

const NewListSchema = new mongoose.Schema({
  Name:String,
  Image:String,
  Price:String
});

exports.NewListModel = mongoose.model('newList', NewListSchema);
exports.SaleListModel = mongoose.model('saleList', SaleListSchema);
