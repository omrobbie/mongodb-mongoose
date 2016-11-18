var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017);
var mongoClient = new mongodb.MongoClient(server);

mongoClient.connect(function(err, client) {
	var db = client.db('bekraf');
});