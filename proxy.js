var http = require('http'),
  httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function (req, res) {
  proxy.web(req, res, {target: 'http://172.18.20.1:8111'});
  res.setHeader("Access-Control-Allow-Origin", "*");
});
server.listen(8111);
