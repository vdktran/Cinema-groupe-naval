
// Controller Require Model
var Data = require('../models/dataModel.js');

// Define and export a method to be used by the Route
exports.display_data = function (req, res) {

    // Use a method defined in the Model
    Data.getAllData(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
