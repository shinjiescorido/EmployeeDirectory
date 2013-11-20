module.exports = function (app) {

   var mongoose = require('mongoose');

/** 
* MONGOOSE DB CONNECT
* -------------------------------------------------------------------------------------------------
* used localhost remote db for testing purposes
**/
mongoose.connect("mongodb://localhost/loggers", function (err) {
  if (err) {
      console.log(err);
  } else {
      console.log('Connected to mongodb!');
  }
});

	//Create reference for data type objectId
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// customfields schema 
var customFields = mongoose.model('customFields',mongoose.Schema({
			
			label: { type: String, required: true},
			fieldType: { type: Number, required: true},
			accessModifier: Boolean,
			values:[String],
			required: Boolean

}));

// usr schema
var User = mongoose.model('Users', mongoose.Schema({
			email: { type: String, required: true,validate: [validateEmail, 'Invalid email']}, 
			password: { type: String, required: true},
			firstName: { type: String, required: true},
			lastName: { type: String, required: true},
			jobPosition: { type: String, required: true},
			photo: String,
			isActive: Boolean,
			field: [customFields]
  })
);

// notifications schema
var notification = mongoose.model('notification', mongoose.Schema({
			message: String,
			recipient: ObjectId,
			sender: ObjectId,
			shown :Boolean,
			isBroadcast: Boolean
}));

//Email Validation method
function validateEmail(v){

	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(v); 

}

}// end exports
