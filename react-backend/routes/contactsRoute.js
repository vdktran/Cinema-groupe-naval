

// Route Require Controller
var contacts_controller = require('../controllers/contactsController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', contacts_controller.Display_all_contacts);
//POST INSERT
router.post('/', contacts_controller.Insert_all_contacts);
//POST UPDATE
router.post('/', contacts_controller.Update_all_contacts);
//POST DELETE
router.post('/', contacts_controller.Delete_all_contacts)
// Export Router to app.js
module.exports = router;
