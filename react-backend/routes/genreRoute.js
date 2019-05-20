

// Route Require Controller
var genre_controller = require('../controllers/genresController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', genre_controller.display_All_Genre);


// Export Router to app.js
module.exports = router;
