/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-07 21:50:07
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-08 17:41:39
 */
'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.join(path.resolve(process.argv[2] || '.'), 'dist');
console.log('root dir is ', root);

// 创建服务器:
var server = http.createServer(function (request, response) {
  
    var 
        pathname = url.parse(request.url).pathname,
        filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
      console.log(filepath, err, stats.isDirectory())
        if (!err && (stats.isFile() || (stats.isDirectory() && request.url === '/'))) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            if (request.url === '/') {
              fs.createReadStream(path.join(filepath, 'index.html')).pipe(response);
            } else {
              fs.createReadStream(filepath).pipe(response);
            }
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8201);

console.log('Server is running at http://127.0.0.1:8201/');