
// Controller Require Model
var Langue = require('../models/langueModel');

// Define and export a method to be used by the Route
exports.display_All_Langue = function (req, res) {

    // Use a method defined in the Model
    Langue.getAllLangue(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
