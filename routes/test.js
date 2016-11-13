'use strict';
const express = require('express');
const router = express.Router();
const lizlisa = require('../middleware/lizlisa');


router.get('/salelist',function(req,res,next){
  lizlisa.updateSaleList().then((list) => {
    res.status(200).json('更新成功');
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
});

router.get('/newarrival',function(req,res,next){
  lizlisa.updateNewArrival().then((list) => {
    res.status(200).json('更新成功');
  })
  .catch((err) => {
    console.trace(err);
    res.status(500).json(err);
  });
});

module.exports = router;
