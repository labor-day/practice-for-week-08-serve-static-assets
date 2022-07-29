const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const responseBody =  fs.readFileSync("index.html");
  // const dogImage = fs.readFileSync("assets/images/dog.jpg");
  // const cssFile = fs.readFileSync("assets/css/application.css");

  //parse route
  if (req.url.startsWith('/static')) {
    let path = req.url.split('/');
    //['', 'static', 'images', 'dog.jpg']
    //['', 'static', 'css', 'application.css']
    let folder = path[2];
    let asset = path[3];

    let assetType = asset.split(".")[1];

    if (assetType = 'jpg') {
      res.setHeader('Content-Type',  'image/jpeg');
    }

    if (assetType = 'css') {
      res.setHeader('Content-Type', 'text/css');
    }

    let file = fs.readFileSync(`./assets/${folder}/${asset}`);
    return res.end(file);
  }

  res.statusCode = 200;
  res.setHeader("Content-Type",  "text/html");
  res.write(responseBody);
  return res.end();
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
