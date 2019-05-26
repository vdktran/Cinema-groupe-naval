

// Route Require Controller
var films_controller = require('../controllers/filmsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', films_controller.display_all_films);
router.get('/filmsoftheday/:day', films_controller.display_films_of_the_day);




// Export Router to app.js
module.exports = router;
