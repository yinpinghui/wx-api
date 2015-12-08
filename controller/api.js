var wechat = require("express")();
var api = global.api;
var bunyan= require('bunyan');
var log=bunyan.createLogger({name:'api'});
wechat.post("/template",function(req,res){
	var data = req.body;
	console.log(JSON.stringify(data));
	//res.end("send");
	api.sendTemplate(data.touser, data.template_id, data.url, data.data, function (err, result, resinner) {
        if (!err) {
        	log.error(err)
        	res.end("fail");
        } else {
        	log.info(result)
        	res.end("ok");
        }
      });
})
exports.wechat = wechat;