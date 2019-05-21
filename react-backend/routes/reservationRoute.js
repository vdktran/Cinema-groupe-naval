
// Route Require Controller
var reservation_controller = require('../controllers/reservationController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', reservation_controller.display_All_Reservation);


// Export Router to app.js
module.exports = router;