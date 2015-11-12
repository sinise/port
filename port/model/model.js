var db = require('./db')

exports.all = function(callback) {
  var collection = db.get().collection('berths')

  collection.find().toArray(function(err, data) {
    callback(err, data)
  })
}

//not testet ment to give one berth back from id
exports.get = function(berthId, callback) {
  var collection = db.get().collection('berths')

  collection.find({_id: berthId}).toArray(function(err, data) {
    callback(err, data)
  })
}

exports.updateBerth = function(json, callback) {
  var collection = db.get().collection('berths')
  collection.replaceOne({_id: json._id}, json, {upsert: true}, function(err, response) {
    callback(err, response)
  })
}