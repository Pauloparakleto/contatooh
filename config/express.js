var express = require('express');
var home = require('../app/routes/home.js');
var load = require('express-load');

module.exports = function() {
  var app = express();
  // Environment variable.
  app.set('port', 3000);
  // diddleware
  app.use(express.static('./public'));

  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  return app;
}
