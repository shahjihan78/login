const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login', function(req, res) {
  const username = req.body.username,
        password = req.body.password
  const data = { username, password }
  res.send(JSON.stringify(data))
})

app.listen(3500, function() {
  console.log('server is listening to port 3500')
})

