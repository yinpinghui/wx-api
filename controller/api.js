var wechat = require("express")();
var api = global.api;
var bunyan= require('bunyan');
var log=bunyan.createLogger({name:'api'});
wechat.post("/template",function(req,res){
	var data = req.body;
	console.log(JSON.stringify(data));
	var templateId = '';
	res.end("send");
	api.sendTemplate(puling, templateId, url, data, function (err, result, res) {
        if (!err) {
        	log.error(err)
        	res.end("fail");
        } else {
        	log.info(result)
        	res.end("ok");
        }
      });
})