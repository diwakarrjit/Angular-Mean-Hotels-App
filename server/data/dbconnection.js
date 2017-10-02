var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://admin:admin@ds157624.mlab.com:57624/angular-mean-hotels-app';

var _connection = null;

var open = function() {
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log("DB connection failed");
      return;
    }
    _connection = db;
    console.log("DB connection open");
  });
};

var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};
