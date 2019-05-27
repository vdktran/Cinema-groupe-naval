

// Route Require Controller
var articles_controller = require('../controllers/articlesController');

var express = require('express');
var router = express.Router();


// GET Data using Express router and a method defined in the Controller
//GET SELECT *
router.get('/', articles_controller.Display_all_articles);
//POST INSERT
router.post('/', articles_controller.Insert_all_articles);
//POST UPDATE
router.post('/', articles_controller.Update_all_articles);
//POST DELETE
router.post('/', articles_controller.Delete_all_articles)
// Export Router to app.js
module.exports = router;
