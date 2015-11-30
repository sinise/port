var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

/**
 * Connects to db
 * @param url Url to mongo database
 * @param callback Calback which is execute when connection atemp has been made
 * @returns {*}
 */
exports.connect = function(url, callback) {
  if (state.db) return callback()

  MongoClient.connect(url, function(err, db) {
    if (err) return callback(err)
    state.db = db
    callback()
  })
}

/**
 * Return the state of the database connection
 * @returns state of the db.
 */
exports.get = function() {
  return state.db
}

/**
 * Close the database connection
 * @param callback Callback with result
 */
exports.close = function(callback) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      callback(err, result)
    })
  }
}
