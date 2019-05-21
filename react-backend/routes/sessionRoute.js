

// Route Require Controller
var session_controller = require('../controllers/sessionController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', session_controller.display_All_Session);


// Export Router to app.js
module.exports = router;
