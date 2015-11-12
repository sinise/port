var express = require('express');
var router = express.Router();

var model = require('../model/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ZigB' });
});

router.get('/getAllBerths', function(req, res, next) {
  model.all(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

router.post('/getBerth', function(req, res, next) {
  json = req.body;
  model.get(json._id, function(err, data) {
    console.log(data);
    res.json(data);
  })
});

router.put('/updateBerth', function(req, res, next) {
  json = req.body
  console.log(json)
  model.updateBerth(json, function(err, response) {
    console.log(response)
    res.json(response);
  })
});


router.get('/angular', function(req, res, next) {
  res.sendfile('./public/javascripts/angular.html');
});




module.exports = router;
