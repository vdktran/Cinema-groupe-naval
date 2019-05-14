
// Route Require Controller
var seances_controller = require('../controllers/seancesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', seances_controller.display_all_seances);
router.get('/seancesoftheday', seances_controller.display_seances_of_the_day);


// Export Router to app.js
module.exports = router;
