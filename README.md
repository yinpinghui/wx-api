wechat api
======

use express4.0 + mysql + socket.io to provide a rest api, just with ability of calling wechat api,like template message, card, hongbao etc.

## feature list

1. express router
2. socket.io for keep-live connection
3. zeromq
4. thrift connection
5. wx api call
6. log


use this project we can go through all the nodejs debug and test .


## todo:

1. 根据调用的来源不同，比如be系统或者前台系统，通过filter进行判断
2. 可以进行多个商户的入住，多个appid，security key
3. 