
// Controller Require Model
var Dimension = require('../models/dimensionModel');

// Define and export a method to be used by the Route
exports.display_All_Dimension = function (req, res) {

    // Use a method defined in the Model
    Dimension.getAllDimension(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
