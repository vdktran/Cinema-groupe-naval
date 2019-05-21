
// Controller Require Model
var Prix = require('../models/prixModel');

// Define and export a method to be used by the Route
exports.display_All_Prix = function (req, res) {

    // Use a method defined in the Model
    Prix.getAllPrix(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

};
