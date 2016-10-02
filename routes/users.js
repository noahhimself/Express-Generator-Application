var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  // Load a users view instead
  var userList = ['John', 'Jack', 'Jamie'];

  res.render('users', {title: 'User list', users: userList});
});

module.exports = router;
