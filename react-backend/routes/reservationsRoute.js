

// Route Require Controller
var reservation_controller = require('../controllers/reservationsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', reservation_controller.Display_all_reservations);
//POST INSERT
router.post('/', reservation_controller.Insert_all_reservations);
//POST UPDATE
router.post('/', reservation_controller.Update_all_reservations);
//POST DELETE
router.post('/', reservation_controller.Delete_all_reservations)
// Export Router to app.js
module.exports = router;
