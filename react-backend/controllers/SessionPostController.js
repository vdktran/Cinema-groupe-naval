// Controller Require Model
var SessionPost = require('../models/SessionPostModel');


// Define and export a method to be used by the Route
exports.Post_All_Sessions = function (req, res) {
    var new_session_post = new SessionPost(req.body);

    // Use a method defined in the Model
    SessionPost.postAllSessions(new_session_post,function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

  };