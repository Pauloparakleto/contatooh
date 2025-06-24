module.exports = function() {
  var controller = {};
  controller.index = function(request, response) {
    response.render('index', { name: 'Express' });
  };

  return controller;
}
