'use strict';
const request = require('request');
const Promise = require('bluebird');

/**
 * @requestBody
 * 
 * @param 目标url
 * @param 方法
 * @param 数据(如果有)
 */
exports.requestBody = (target, method, data) => {
  let option = {
    url: target,
    method: method
  }
  if(typeof data !== 'undefined') { option.data = data };
  return new Promise((resolve, reject) => {
    request(target, function (err, response, body) {
      if(err){
        reject(err);
      }
      resolve(body);
    });
  })
}