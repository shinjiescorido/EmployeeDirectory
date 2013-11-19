module.exports = function (app) {

mongoose.connect('mongodb://root:root@ds039507.mongolab.com:39507/empdir', function (err) {
  if (err) {
      console.log(err);
  } else {
      console.log('Connected to mongodb!');
  }
});

var Usr = mongoose.model('Users', mongoose.Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now}
  })
);

}