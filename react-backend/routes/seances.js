var express = require('express');
var seances_controller = require('../controllers/seancesController');
var router = express.Router();



/* GET users listing. */
router.get('/seance', seances_controller);


module.exports = router;