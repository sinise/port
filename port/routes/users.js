var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
var jwt = require('jsonwebtoken');
var app = require('../app');


router.post('/authenticate', function(req, res, next) {
  received = req.body;

  userModel.getUser(received, function(err, data) {
    console.log('---------post-----------------')
    console.log(received.username)
    console.log(received.password)
    console.log('-----------DB---------------')
    console.log(data);
    console.log(data.username);
    console.log(data.password);
    if (data.password != received.password){
      res.json({success: false, message: "Authentication failed"});
    } else {
      console.log('we are in else the password match');
      var token = jwt.sign({userType: 'admin'}, req.app.get('superSecret'));
      res.json({success: true, message: "you are authenticated", token: token})
    }
  })
});



router.all('/*', function(req, res, next) {
  token = req.headers.token;
  console.log(token);
  jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {
    console.log(decoded) // bar
    if (decoded){
      req.authenticated = true;
      next();
    } else {
      req.authenticated = false;
      next();
    }
  });
});

router.get('/getAllUsers', function(req, res, next) {
  if(req.authenticated == true){
    userModel.all(function(err, data) {
      console.log(data);
      res.json(data);
    })
  } else {
    res.json({message: 'you do not have access to this page'});
  }
});
router.post('/updateUser', function(req, res, next) {
  if(req.authenticated == true) {
    json = req.body;
    console.log(json);
    userModel.updateUser(json, function (err, response) {
      console.log(response)
      res.json(response);
    })
  } else{
    res.json({message: 'you do not have access to this page'});
  }
});

router.get('*', function(req, res, next) {
  res.send("404. We don't know that page");
});

module.exports = router;
