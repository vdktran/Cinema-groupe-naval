// Controller Require Model
var Session = require('../models/SessionPostModel');


// Define and export a method to be used by the Route
exports.display_All_Sessions = function (req, res) {
    var new_session = new Contacts(req.body);

    // Use a method defined in the Model
    Session.postAllSessions(new_session,function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };