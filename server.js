var http=require("http");
var handlerUrl=require("./handlerURL")
var config=require("./config");
var formidable = require('formidable');
http.createServer(function(req,res) {
    res.writeHead("200",{
        "Content-Type":"text/plain",
        "Content-Type":"text/html;charset=utf-8"
    })    
    
    var form = new formidable.IncomingForm();
    // form.uploadDir = config.uploadDir;//上传文件的保存路径
    form.uploadDir = 'public/file';
    form.keepExtensions = true;//保存扩展名
    form.maxFieldsSize = 20 * 1024 * 1024;//上传文件的最大大小
    form.parse(req, function (err, fields, files) {
            
        // res.writeHead(200, { 'content-type': 'text/plain' });
        res.write('received upload:\n\n');
        console.log(files)

        // res.end(util.inspect({ fields: fields, files: files }));
    });





}).listen(8003)
    
