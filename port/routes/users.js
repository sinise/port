var express = require('express');
var router = express.Router();

var userModel = require('../model/userModel');
router.get('/getUsers', function(req, res, next) {
  userModel.all(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

router.put('/updateUser', function(req, res, next) {
  json = req.body;
  console.log(json);
  userModel.updateUser(json, function(err, response) {
    console.log(response)
    res.json(response);
  })
});
module.exports = router;
