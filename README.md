server by using http notes
1. npm init -y
2. create "app.js" file. \
     --Import http through "const http = require('http')". \
     --create server through " http.createServer(callback with req,res argument)" method. \
     --then run server through "app.listen(port,hostname, callback)" method.
3. use 'fs' module for reading files. \
     --Import fs through "const fs = require('fs')". \
     --For reading file use "const file_data = fs.readFileSync('file_name')". 
4. set "res.setHeader('Content-Type', 'text/html')" for telling to brower that which kind of file get serve.
5. create routes through if-else conditions. \
     --get path through "url = req.url", \
     --if(url=='/') then serving the file through "res.end(file_data)" method. \
     --also else if(url=='/about').
