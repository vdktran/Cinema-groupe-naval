
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var user = function (data) {
    this.id = data.id,
        this.users_nom = data.users_nom,
        this.users_prenom = data.users_prenom,
        this.users_email = data.users_email,
        this.users_naissance = data.users_naissance,
        this.users_telephone = data.users_telephone,
        this.update = data.update,
        this.idUpdate = data.idUpdate,
        this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

user.getAllusers = function (result) {

    // Database query
    sql.query('SELECT * from users', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });

};


// Define Object method to be used by a Controller
user.insertAllusers = function (newuserInsert, result) {
    var newusersInsert = Object.values(newuserInsert);
    console.log(newuserInsert);
    var tableuserInsert = [
        [newusersInsert[1], newusersInsert[2], newusersInsert[3], newusersInsert[4], newusersInsert[5]]
    ];
    console.log(tableuserInsert);

    // Database query
    var query = 'INSERT INTO users (users_nom, users_prenom, users_email, users_naissance, users_telephone) VALUES ?'

    sql.query(query, [tableuserInsert], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};

user.updateAllusers = function (newuserUpdate, result) {
    var newusersUpdate = Object.values(newuserUpdate);
    console.log(newusersUpdate);
    var tableuserUpdate = [
        [newusersUpdate[6], newusersUpdate[7]]
    ];
    console.log(tableuserUpdate);

    // Database query
    var query = 'UPDATE users SET ? WHERE id = ?'

    sql.query(query, [tableuserUpdate], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};

user.deleteAllusers = function (newuserDelete, result) {
    var newusersDelete = Object.values(newuserDelete);
    console.log(newusersDelete);
    var tableuserDelete = [
        [newusersDelete[8]]
    ];
    console.log(tableuserDelete);

    // Database query
    var query = 'DELETE users WHERE id = ?'

    sql.query(query, [tableuserDelete], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};
// Export Object to Controller
module.exports = user;
