var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// buat schema (struktur) database
var userSchema = new Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String
	},
	created_at: Date,
	updated_at: Date
});

mongoose.connect('mongodb://localhost/bekraf');
var User = mongoose.model('user', userSchema);
module.exports = User;

// data user
// var newUser = User({
// 	name: 'Peter Quill',
// 	username: 'starlord55',
// 	password: 'password',
// 	admin: true
// });

// newUser.save(function(err) {
// 	if(err) throw err;
// 	console.log('User created!');
// });


// cari data
// User.find({}, function(err, users) {
// 	if(err) throw err;
// 	console.log(users);
// });


// cari hanya satu data
User.findOne({admin:true}, function(err, users) {
	if(err) throw err;
	console.log(users);
});