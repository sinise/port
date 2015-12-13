var db = require('./db')

/**
 * Get all beth from DB
 * @param callback Callback function to call with result
 */
exports.all = function(callback) {
  var collection = db.get().collection('berths')
  collection.find().toArray(function(err, data) {
    callback(err, data)
  })
}

/**
 * Update berth status (or insert berth if not exist)
 * @param json The berth and its status as {"_id": id, "occupied": status}
 * id is the id of the berth and status is 0 if it is free or 1 if it is ocupied
 * @param callback Callback whit response and error message
 */
exports.updateBerth = function(json, callback) {
  var collection = db.get().collection('berths')
  collection.replaceOne({_id: json._id}, json, {upsert: true}, function(err, response) {
    callback(err, response)
  })
}