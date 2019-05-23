// Route Require Controller
var sessions_controller = require('../controllers/SessionPostController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.post('/', sessions_controller.Post_All_Sessions);

// Export Router to app.js
module.exports = router;