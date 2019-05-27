

// Route Require Controller
var films_controller = require('../controllers/filmsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', films_controller.Display_all_films);
//GET DYNAMIQUE VICTOR
router.get('/filmsoftheday/:day', films_controller.display_films_of_the_day);
//POST INSERT
router.post('/', films_controller.Insert_all_films);
//POST UPDATE
router.post('/', films_controller.Update_all_films);
//POST DELETE
router.post('/', films_controller.Delete_all_films)
// Export Router to app.js
module.exports = router;
