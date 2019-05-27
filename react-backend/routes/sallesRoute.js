

// Route Require Controller
var salles_controller = require('../controllers/sallesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', salles_controller.Display_all_salles);
//POST INSERT
router.post('/', salles_controller.Insert_all_salles);
//POST UPDATE
router.post('/', salles_controller.Update_all_salles);
//POST DELETE
router.post('/', salles_controller.Delete_all_salles);
// Export Router to app.js
module.exports = router;
