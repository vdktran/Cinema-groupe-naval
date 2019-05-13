
// Controller Require Model
var Seances = require('../models/seancesModel');

// Define and export a method to be used by the Route
exports.display_all_seances = function (req, res) {

    // Use a method defined in the Model
    Films.getAllSeances(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };

