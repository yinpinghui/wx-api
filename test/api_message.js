var request = require('request');
var url = 'http://';
var formData ={
	"template_id":"OrQrUVuz_F3jHv0QS3dEH8-TEWd-ytTuFIZX-ctXHMc",
    "url":"https://m.zhugelicai.com/", #跳转页面
    "topcolor":"#FF0000",
    "data" : {
    	'first':{"value":'你好，请注意业务系统报警内容',"color" : "#173177"},
    	'keyword1':{"value":'用户子系统',"color" : "#173177"},
    	'keyword2':{"value":'2014年8月8日 18:36',"color" : "#173177"},
    	'keyword3':{"value":'高',"color" : "#173177"},
    	'remark' : {"value":'新用户创建失败',"color" : "#173177"}
    },
    touser : 'ol5'
}
	
request.post({url:url,formData:formData}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})