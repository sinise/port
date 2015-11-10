var express = require('express');
var router = express.Router();

var model = require('../model/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/zigbee', function(req, res, next) {
  model.all(function(err, data) {
    consbabi ole.log(data);
    res.json(data);
  })
});


router.post('/zigbee', function(req, res, next) {
  json = req.body
  console.log(json)
  model.updateBerth(json, function(err, response) {
    console.log(response)
    res.json(response);

});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;


