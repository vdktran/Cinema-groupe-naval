

// Route Require Controller
var users_controller = require('../controllers/usersController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', users_controller.Display_all_users);
//POST INSERT
router.post('/', users_controller.Insert_all_users);
//POST UPDATE
router.post('/', users_controller.Update_all_users);
//POST DELETE
router.post('/', users_controller.Delete_all_users);
// Export Router to app.js
module.exports = router;
