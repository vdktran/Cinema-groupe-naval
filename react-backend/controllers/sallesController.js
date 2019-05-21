
// Controller Require Model
var salles = require('../models/sallesModel');

// Define and export a method to be used by the Route
exports.display_All_Salles = function (req, res) {

    // Use a method defined in the Model
    salles.getAllSalles(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
