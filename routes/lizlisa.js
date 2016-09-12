/**
 * Created by Mu on 16/2/23.
 */
'use strict';
const express = require('express');

const router = express.Router();

const lizlisa = require('../middleware/lizlisa');


router.get('/',function(req,res,next){
  lizlisa.getList();
  res.status(200).end();
});

module.exports = router;
