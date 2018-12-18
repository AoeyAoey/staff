var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: {type:String,lowercase: true, unique: true, index: true},
  password: String,
  phone:Number,
  gender:String,
  crateDate:Date,
  updateDate:Date
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');