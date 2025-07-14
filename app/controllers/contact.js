module.exports = function() {
  var controller = {};
  var contacts = [
    {_id: 1, name: 'Contact 1', email: 'cont1@mail.com'},
    {_id: 2, name: 'contact 2', email: 'cont2@mail.com'},
    {_id: 3, name: 'Contact 3', email: 'cont3@mail.com'}
  ];

  controller.index = function(request, response){
    response.json(contacts);
  };

  controller.show = function(request, response){
    var id = request.params.id;
    var contact = contacts.filter((item) => {
      return item._id == id;
    })[0];
    contact ? response.json(contact) : response.status(404).send('Not found');
  };

  return controller;
}
