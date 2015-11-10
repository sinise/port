var db = require('./db')

exports.all = function(callback) {
  var collection = db.get().collection('berths')

  collection.find().toArray(function(err, data) {
    callback(err, data)
  })
}

exports.updateBerth = function(json, callback) {
  var collection = db.get().collection('berths')

  collection.replaceOne(json, json, {upsert: true}, function(err, response) {
    callback(err, response)
  })
    
}