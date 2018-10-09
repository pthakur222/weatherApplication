const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const func = require('./src/server/index.js');

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', express.static(path.join(__dirname, './', 'public')));

app.get('/weather',function(req, res, err) {
    var location = req.query.location;
  
    func.getWeather(location,function(result){
            res.send(result);
            console.log(result);
    })


  });
  

server.listen(8080, () => {
    console.log('Listening on port 8080');
})