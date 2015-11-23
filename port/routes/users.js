var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

router.get('/getAllUsers', function(req, res, next) {
  userModel.all(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

router.post('/updateUser', function(req, res, next) {
  json = req.body;
  console.log(json);
  userModel.updateUser(json, function(err, response) {
    console.log(response)
    res.json(response);
  })
});

router.get('*', function(req, res, next) {
  res.send("404. We don't know that page");
});




module.exports = router;
