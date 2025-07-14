module.exports = function(app) {
  var controller = app.controllers.contact;
  app.get('/contacts', controller.index);
  app.get('/contacts/:id', controller.show);
};
