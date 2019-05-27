

// Route Require Controller
var genres_controller = require('../controllers/genresController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', genres_controller.Display_all_genres);
//POST INSERT
router.post('/', genres_controller.Insert_all_genres);
//POST UPDATE
router.put('/', genres_controller.Update_all_genres);
//POST DELETE
router.delete('/', genres_controller.Delete_all_genres)
// Export Router to app.js
module.exports = router;
