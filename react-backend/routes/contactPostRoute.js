// Route Require Controller
var contacts_controller = require('../controllers/ContactPostController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.post('/', contacts_controller.display_all_contacts);


// Export Router to app.js
module.exports = router;