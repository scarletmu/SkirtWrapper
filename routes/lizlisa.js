'use strict';
const express = require('express');
const router = express.Router();
const lizlisa = require('../middleware/lizlisa');

router.get('/getsalelist',function(req,res,next){
  lizlisa.getSaleList().then((list) => {
    res.status(200).json(list);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

router.get('/getcalendarlist', (req, res) => {
  lizlisa.getCalendarList().then((list) => {
    res.status(200).json(list);
  })
  .catch((err) => {
    console.trace(err);
    res.status(500).json(err);
  });
})

module.exports = router;
