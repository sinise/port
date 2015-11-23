var db = require('./db')

exports.all = function(callback) {
    var collection = db.get().collection('users')

    collection.find().toArray(function(err, data) {
        callback(err, data)
    })
}

exports.updateUser = function(json, callback) {
    var collection = db.get().collection('users')
    collection.insert(json, {upsert: true}, function(err, response) {
        callback(err, response)
    })
}
