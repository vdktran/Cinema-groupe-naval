var express = require('express');
var film_controller = require('../controllers/filmsController');
var router = express.Router();



/* GET users listing. */
router.get('/data', film_controller);


module.exports = router;
