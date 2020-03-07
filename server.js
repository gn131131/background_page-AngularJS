/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-07 21:50:07
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-07 21:55:17
 */
var http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8201);

console.log('Server running at http://127.0.0.1:8201/');