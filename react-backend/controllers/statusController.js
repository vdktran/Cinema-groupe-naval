
// Controller Require Model
var Status = require('../models/statusModel');

// Define and export a method to be used by the Route
exports.display_All_Status = function (req, res) {

    // Use a method defined in the Model
    Status.getAllStatus(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
