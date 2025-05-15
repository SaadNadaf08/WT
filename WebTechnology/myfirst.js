const http = require('http');
let dt = require('./myfirstmodule');

http.createServer(function(req,res){
res.writeHead(200,{'content-Type' : 'text/html'});
res.write("Today is : "+dt.currentDate());
res.end();
}).listen(8080);