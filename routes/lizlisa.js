/**
 * Created by Mu on 16/2/23.
 */
'use strict';
const express = require('express');

const router = express.Router();

const lizlisa = require('../modules/lizlisa');


router.get('/',function(req,res,next){
  saleList.parse().then(function(data){
    res.json(data);
  }).catch((err) => {console.log(err);res.status(403).end();});
});

module.exports = router;
