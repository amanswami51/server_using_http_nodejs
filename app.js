//*****************server by using http notes*****************
//1. npm init -y
//2. create "app.js" file.
//      --Import http through "const http = require('http')".
//      --create server through " http.createServer(callback with req,res argument)" method. 
//      --then run server through "app.listen(port,hostname, callback)" method.
//3. use 'fs' module for reading files.
//      --Import fs through "const fs = require('fs')".
//      --For reading file use "const file_data = fs.readFileSync('file_name')".
//4. set "res.setHeader('Content-Type', 'text/html')" for telling to brower that which kind of file get serve.
//5. create routes through if-else conditions.
//      --get path through "url = req.url",
//      --if(url=='/') then serving the file through "res.end(file_data)" method.
//      --also else if(url=='/about').
//
















const http = require('http');   //add http module
const fs = require('fs');       //add fs module

const hostname = '127.0.0.1';
const port = 3000;

//read file of all navigation bar
const home_var = fs.readFileSync('01_index.html');
const contact_var = fs.readFileSync('02_contact_form.html');
const payment_var = fs.readFileSync('03_payment_form.html');
const about_var = fs.readFileSync('04_about.html');

//create server
// const app = express(); //This is easy way to create server by using express 
const app = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); //tell the browser that which type of content is.

    url = req.url;

    if(url == '/'){     //url mean value of href, which are use in navigation bar <a> tag in index.html.
        res.end(home_var);  //use to serve the file to client
    }
    else if(url == '/contect'){
        res.end(contact_var);
    }
    else if(url == '/payment'){
        res.end(payment_var);
    }
    else if(url == '/about'){
        res.end(about_var);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    }
});

//Execute server
app.listen(port, hostname, ()=>{
    console.log(`server running att http://${hostname}:${port}/`);
});