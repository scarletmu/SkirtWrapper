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
  Url: String,
  Avatar: String,
  Name: String,
  Price: String,
  SalePrice: String,
  Brand: String,
  createdAt: {type: Date, default: Date.now }
});

const NewListSchema = new mongoose.Schema({
  Url: String,
  Avatar: String,
  Name: String,
  Price: String,
  Brand: String,
  createdAt: {type: Date, default: Date.now }
});

exports.NewListModel = mongoose.model('newList', NewListSchema);
exports.SaleListModel = mongoose.model('saleList', SaleListSchema);
