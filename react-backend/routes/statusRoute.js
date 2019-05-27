

// Route Require Controller
var status_controller = require('../controllers/statusController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', status_controller.Display_all_status);
//POST INSERT
router.post('/', status_controller.Insert_all_status);
//POST UPDATE
router.post('/', status_controller.Update_all_status);
//POST DELETE
router.post('/', status_controller.Delete_all_status)
// Export Router to app.js
module.exports = router;
