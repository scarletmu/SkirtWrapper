/**
 * Created by Mu on 16/2/23.
 */
'use strict';
var express = require('express');
var router = express.Router();
var saleList = require('../modules/lizlisa/saleList');

router.get('/',function(req,res,next){
  saleList.parse().then(function(data){
    res.json(data);
  }).catch((err) => {console.log(err);res.status(403).end();});
});

module.exports = router;