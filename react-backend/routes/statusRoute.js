

// Route Require Controller
var status_controller = require('../controllers/statusController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', status_controller.display_All_Status);


// Export Router to app.js
module.exports = router;
