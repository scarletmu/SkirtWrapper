var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  var image = [],
      name = [],
      bprice = [],
      aprice = [],
      info;
  request('http://www.tokyokawaiilife.jp/shop/liz-lisa/item/list/stock_available/1/category_id/102/page/2',function(err,response,body){
    if(err){
      console.log(err);
      res.render('index',{title:'Error'});
    }else if(response && body){
      $ = cheerio.load(body);
      var list = $('.sectionContent .row-fluid').children();
      var count = list.length;
      for(var i = 0;i<count;i++){
        var item = list[i].children;
        image.push(item[1].children[0].children[1].attribs.src);
        info = item[3].children;
        name.push(info[5].children[0].children[0].data);
        bprice.push(info[7].children[1].children[0].data);
        aprice.push(info[7].children[3].children[0].data);
      }
      res.render('index', { title: '爬虫测试' ,image:image,name:name,bprice:bprice,aprice:aprice});
    }
  });

});

module.exports = router;
