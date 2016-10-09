const redis = require('redis')
const bluebird = require('bluebird');
const client = redis.createClient('6379', 'localhost');

client.select(1, function(err, data){
  if(err){
    console.error('Redis Select DB Failed');
    console.error(err);
  }else{
    console.log('Redis client Start Success');
  }
});

bluebird.promisifyAll(redis.RedisClient.prototype);

module.exports = client;