

// Route Require Controller
var salles_controller = require('../controllers/sallesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', salles_controller.display_All_Salles);


// Export Router to app.js
module.exports = router;
