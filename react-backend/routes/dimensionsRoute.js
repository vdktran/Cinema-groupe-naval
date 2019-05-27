

// Route Require Controller
var dimensions_controller = require('../controllers/dimensionsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', dimensions_controller.Display_all_dimensions);
//POST INSERT
router.post('/', dimensions_controller.Insert_all_dimensions);
//POST UPDATE
router.post('/', dimensions_controller.Update_all_dimensions);
//POST DELETE
router.post('/', dimensions_controller.Delete_all_dimensions)
// Export Router to app.js
module.exports = router;
