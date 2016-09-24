/**
 * Created by Mu on 16/2/23.
 */
'use strict';
const express = require('express');

const router = express.Router();

const lizlisa = require('../middleware/lizlisa');


router.get('/',function(req,res,next){
  lizlisa.saleList().then((list) => {
    res.status(200).json(list);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

module.exports = router;
