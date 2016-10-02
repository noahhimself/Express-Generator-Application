var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Its time for a break!' });
});

/* GET random number page */
router.get('/random', function(req, res, next) {
  var someNumber = Math.random();

  // Load view and pass the title and number
  res.render('random', {title: 'Random Number', randomNumber: someNumber});
});


module.exports = router;
