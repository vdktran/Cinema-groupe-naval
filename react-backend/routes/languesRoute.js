

// Route Require Controller
var langues_controller = require('../controllers/languesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', langues_controller.Display_all_langues);
//POST INSERT
router.post('/', langues_controller.Insert_all_langues);
//POST UPDATE
router.post('/', langues_controller.Update_all_langues);
//POST DELETE
router.post('/', langues_controller.Delete_all_langues)
// Export Router to app.js
module.exports = router;
