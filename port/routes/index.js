var express = require('express');
var router = express.Router();
var apiModel = require('../model/apiModel');

/**
 * Return a list af all berth and their status as json
 */
router.get('/getAllBerths', function(req, res) {
  apiModel.all(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

/**
 * Updata the status of a berth. or create berth if not in the DB
 */
router.put('/updateBerth', function(req, res) {
  json = req.body
  console.log(json)
  apiModel.updateBerth(json, function(err, response) {
    console.log(response)
    res.json(response);
  })
});

/**
 * Send the index.html file
 */
router.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});


module.exports = router;
