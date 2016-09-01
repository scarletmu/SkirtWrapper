/**
 * Created by Mu on 16/3/1.
 */
'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res) {
  let params = [];
  params.push('wt=json');
  params.push('fq=bd%3AAL040');
  params.push('fq=scls%3An_usual');
  params.push('fq=-stnum%3A0');
  params.push('fq=-icon%3Arestock');
  params.push('rows=40');
  params.push('sort=fsdt%20desc');
  params.push('facet=true');
  params.push('facet.field=cc1');
  let url = 'http://ailand-store.jp/ise/select?'+params.join('&');
  console.log(url);
  request(url,function(err,response,body){
    let data = JSON.parse(body);
    let itemList = data.response.docs;
    console.log(itemList);
    res.status(200).end();
  })
});
module.exports = router;

//AnkRouge official javascript using its api
// <script type="text/javascript">
// $(function() {
//
//     var params = new Array();
//     params.push('wt=json');
//     params.push('fq=bd%3AAL040');
//     params.push('fq=scls%3An_usual');
//     params.push('fq=-stnum%3A0');
//     params.push('fq=-icon%3Arestock');
//     params.push('rows=40');
//     params.push('sort=fsdt%20desc');
//     params.push('facet=true');
//     params.push('facet.field=cc1');
//
// 	var pagingTemplate = _.template($('#pagingTemplate').html());
//
//     var template = _.template($('#template').html());
// 	var $container = $('#itemContainer');
//
//     $.ajax({
//         url: '/ise/select',
//         data : params.join('&'),
//         dataType : "json",
//     }).done(function(data, status, xhr) {
//     	var numFound = data.response.numFound;
//         var rows = 1 * data.responseHeader.params.rows;
//         var start = 1 * data.responseHeader.params.start;
//     	numFound = numFound || 0;
//         rows = rows || 10;
//         start = start || 0;
//         $container.html('');
//         if (numFound > 0) {
//           $('.pageflap-list-found').show();
//           $('.pageflap-list-notfound').hide();
//         } else {
//           $('.pageflap-list-found').hide();
//           $('.pageflap-list-notfound').show();
//           $container.append('<div id="cannot_find" style="text-align: center;">条件に一致する商品は見つかりませんでした。お手数ですが、検索条件を変更してください。</div>');
//         }
//         $("[data-num-found]").append(numFound);
//         var seqStart = numFound > 0 ? 1 + start : 0;
//         var seqEnd = start + ((numFound < rows) ? numFound : rows);
//         if (seqEnd > numFound) {
//           seqEnd = numFound;
//         }
//         $("[data-found-seq-start]").append(seqStart);
//         $("[data-found-seq-end]").append(seqEnd);
//         $(".pagination").append(pagingTemplate({ numFound: 1 * numFound, rows: 1 * rows, start: 1 * start }));
//
// 		var index = 0;
//         _.each(data.response.docs, function(doc) {
// 		    $container.append(template({ index: ++index, doc: doc, rqid: '', specId: '' }));
//         });
//
// 		$('.list-item > ul > li .box').tile(4);
// 		$('ul#itemContainer').children('li').tile(4);
//
// 		var VARIATION_SPEED = 200;
// 		var lastCount=0;
// 		$('ul#itemContainer').children('li').each(function (i) {
// 			lastCount++;
//
// 			$('.variation',this).show();
// 			var w=$('#main').width()-10;
// 			var h=$('.variation',this).height();
// 			$('.variation',this).hide();
// 			var elm=$('.photo',this);
// 			var img=elm.attr("src");
// 			$(this).hover(
// 				function () {
// 					$(this).css({"zIndex":80});
// 					$('.variation',this).height(0);
// 					$('.variation',this).stop().animate({height: h + "px"}, VARIATION_SPEED );
// 					$('.variation',this).show();
// 				},
// 				function () {
// 					$(this).css({"zIndex":50});
// 					$('.variation',this).stop().hide();
// 				}
// 			);
//  		});
//
// 	    $("#list-pager a").each(function(){
// 	    	var url = $(this).attr("href");
// 			url = url.replace(/&amp;/g,"&");
// 			url = url.replace(/&quot;/g,"\"");
// 			url = url.replace(/&&&/g,"&")
// 			url = url.replace(/&&/g,"&")
// 			url = url.replace("?&","?")
//
// 			var keyword = "";
// 	    	$(this).attr("href", url);
// 		});
//
// 		var items_criteo = [];
//         _.each(data.response.docs, function(doc) {
//             if (items_criteo.length < 3) {
// 		    	items_criteo.push(doc.cd);
//             }
//         });
// 		window.criteo_q = window.criteo_q || [];
// 		window.criteo_q.push(
// 	        { event: "setAccount", account: 15519 },
// 	        { event: "setSiteType", type: "d" },
// 	        { event: "viewList", item: items_criteo }
// 		);
//
// 	 });
// });
