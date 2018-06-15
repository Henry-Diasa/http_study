const http = require("http");
http.createServer(function(req,res){
   console.log("request come",req.url);
   res.writeHead(200,{
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Headers':'X-Test-Cors',// 设置自定义的允许请求头
       'Access-Control-Allow-Methods':'POST,PUT,Delete' ,// 设置请求方法
       'Access-Control-Max-Age':'1000' // 预请求的时间，超过这个时间不发options请求吗，直接发送正式请求。
   })
   res.end('123')
}).listen(8887)
console.log("server is running at 8887")