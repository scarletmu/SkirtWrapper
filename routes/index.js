'use strict';
const express = require('express');
const router = express.Router();
const api = require('../middleware/api');


//按日期获取上新
router.get('/:brand/getNewList', api.getNewArrivalByDay);

router.get('/:brand/getSaleList', api.getSaleList);

router.get('/getSaleList', api.getSaleList);

router.get('/getNewList', api.getNewArrivalByDay);

router.get('/getCalendar', api.getCalendar);
module.exports = router;
