

// Route Require Controller
var langue_controller = require('../controllers/languesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', langue_controller.display_All_Langue);


// Export Router to app.js
module.exports = router;
