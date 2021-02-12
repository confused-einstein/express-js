var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.appendFile('demo.html', 'data to append', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
  //Open a file on the server and return its content:
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
