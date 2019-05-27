

// Route Require Controller
var session_controller = require('../controllers/sessionsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', session_controller.Display_all_sessions);
//GET DYNAMIQUE VICTOR
router.get('/seancesoftheday/:dayweek/:film_id', session_controller.display_seances_of_the_day);
//POST INSERT
router.post('/', session_controller.Insert_all_sessions);
//POST UPDATE
router.post('/', session_controller.Update_all_sessions);
//POST DELETE
router.post('/', session_controller.Delete_all_sessions)
// Export Router to app.js
module.exports = router;
