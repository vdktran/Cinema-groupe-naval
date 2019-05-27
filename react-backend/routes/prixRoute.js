

// Route Require Controller
var prix_controller = require('../controllers/prixController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', prix_controller.Display_all_prix);
//POST INSERT
router.post('/', prix_controller.Insert_all_prix);
//POST UPDATE
router.post('/', prix_controller.Update_all_prix);
//POST DELETE
router.post('/', prix_controller.Delete_all_prix)
// Export Router to app.js
module.exports = router;
