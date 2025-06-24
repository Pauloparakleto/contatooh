var express = require('express');

module.exports = function() {
  var app = express();
  // Environment variable.
  app.set('port', 3000);
  // diddleware
  app.use(express.static('./public'));
  return app;
}
