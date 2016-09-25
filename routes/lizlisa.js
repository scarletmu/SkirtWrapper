/**
 * Created by Mu on 16/2/23.
 */
'use strict';
const express = require('express');

const router = express.Router();

const lizlisa = require('../middleware/lizlisa');


router.get('/salelist',function(req,res,next){
  lizlisa.saleList().then((list) => {
    res.status(200).json(list);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

router.get('/newarrival',function(req,res,next){
  lizlisa.newArrival().then((list) => {
    res.status(200).json(list);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

module.exports = router;
