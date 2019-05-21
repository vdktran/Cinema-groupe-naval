
// Controller Require Model
var Session = require('../models/SessionModel');

// Define and export a method to be used by the Route
exports.display_All_Session = function (req, res) {

    // Use a method defined in the Model
    Session.getAllSession(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
