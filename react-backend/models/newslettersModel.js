
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var newsletter = function (data) {
    this.id = data.id,
        this.email = data.email,
        this.update = data.update,
        this.idUpdate = data.idUpdate,
        this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

newsletter.getAllnewsletters = function (result) {

    // Database query
    sql.query('SELECT * from newsletter', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });

};
newsletter.insertAllnewsletters = function (newnewsletterInsert, result) {
    var newnewslettersInsert = Object.values(newnewsletterInsert);
    console.log(newnewsletterInsert);
    var tablenewsletterInsert = [
        [newnewslettersInsert[1]]
    ];
    console.log(tablenewsletterInsert);

    // Database query
    var query = 'INSERT INTO newsletter (newsletters_email) VALUES ?'

    sql.query(query, [tablenewsletterInsert], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};

newsletter.updateAllnewsletters = function (newnewsletterUpdate, result) {
    var newnewslettersUpdate = Object.values(newnewsletterUpdate);
    console.log(newnewslettersUpdate);
    var tablenewsletterUpdate = [
        [newnewslettersUpdate[2], newnewslettersUpdate[3]]
    ];
    console.log(tablenewsletterUpdate);

    // Database query
    var query = 'UPDATE newsletter SET ? WHERE id = ?'

    sql.query(query, [tablenewsletterUpdate], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};

newsletter.deleteAllnewsletters = function (newnewsletterDelete, result) {
    var newnewslettersDelete = Object.values(newnewsletterDelete);
    console.log(newnewslettersDelete);
    var tablenewsletterDelete = [
        [newnewslettersDelete[4]]
    ];
    console.log(tablenewsletterDelete);

    // Database query
    var query = 'DELETE newsletter WHERE id = ?'

    sql.query(query, [tablenewsletterDelete], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};
// Export Object to Controller
module.exports = newsletter;
