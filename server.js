var http = require("http"); 
var fs = require("fs");

fs.readFile('./index.html', function (err, html) 
{
    if (err) throw err; 

    http.createServer(function (request,response)
    {  
        // serve site
        if (request.url === "/" || request.url.endsWith(".html")) {
            response.writeHeader(200, {"Content-Type": "text/html"});  
        } else if (request.url.endsWith(".js")) {
            response.writeHeader(200, {"Content-Type": "application/javascript"});  
        }
        response.write(html);  
        response.end(); 
    }).listen(8888); 
});
