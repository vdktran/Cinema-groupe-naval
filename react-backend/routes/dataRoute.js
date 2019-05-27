

// Route Require Controller
var data_controller = require('../controllers/dataController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', data_controller.display_data);


// Export Router to app.js
module.exports = router;
