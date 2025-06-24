var express = require('express');
var home = require('../app/routes/home.js');

module.exports = function() {
  var app = express();
  // Environment variable.
  app.set('port', 3000);
  // diddleware
  app.use(express.static('./public'));
  home(app);

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  return app;
}
