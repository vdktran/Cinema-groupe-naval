

// Route Require Controller
var dimension_controller = require('../controllers/dimensionsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', dimension_controller.display_All_Dimension);


// Export Router to app.js
module.exports = router;
