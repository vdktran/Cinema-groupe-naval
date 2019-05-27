

// Route Require Controller
var newsletter_controller = require('../controllers/newslettersController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', newsletter_controller.Display_all_newsletters);
//POST INSERT
router.post('/', newsletter_controller.Insert_all_newsletters);
//POST UPDATE
router.post('/', newsletter_controller.Update_all_newsletters);
//POST DELETE
router.post('/', newsletter_controller.Delete_all_newsletters)
// Export Router to app.js
module.exports = router;
