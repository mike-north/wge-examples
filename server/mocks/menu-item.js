module.exports = function(app) {
  var express = require('express');
  var menuItemRouter = express.Router();

  menuItemRouter.get('/', function(req, res) {
    res.send({
      'menu-items': [{
        id: 1,
        name: 'Hamburger',
        price: 1.3
      }, {
        id: 2,
        name: 'Fries',
        price: 2.4
      }, {
        id: 3,
        name: 'Hot Dog',
        price: 1.2
      }]
    });
  });

  app.use('/api/menu_items', menuItemRouter);
};
