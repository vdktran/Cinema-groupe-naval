
// Route Require Controller
var prix_controller = require('../controllers/prixController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
router.get('/', prix_controller.display_All_Prix);


// Export Router to app.js
module.exports = router;