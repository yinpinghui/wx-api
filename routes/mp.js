var express = require('express');
var router = express.Router();
var WechatAPI = require('wechat-api');
var config = require('../wxconfig');
var redis = require("redis");

var redis_cli = redis.createClient(config.redis.port, config.redis.host);
// client.auth('');


var api = new WechatAPI(config.wx.appid, config.wx.appSecret, function (callback) {
  redis_cli.get("wx_token",function(err,result){
      console.log("get token from redis");
      callback(null, JSON.parse(result));
  })  
}, function (token, callback) {
  // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
  // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
   redis_cli.set("wx_token",token,function(err,result){
      callback();
  })  
  
});

require("./card")(router,api)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"msg": 'standby'})
});

router.post("/card/createCard",function(req,res,next){
    var card = req.body
    api.createCard()
})


module.exports = router;


