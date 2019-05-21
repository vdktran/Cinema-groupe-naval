
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Reservation = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Reservation.getAllReservation= function (result) {

    // Database query
    sql.query('SELECT reservations.reservation_id, reservations.users_id, reservations.seance_id, reservations.prix_id, reservations.quantite, reservations.film_id, users.users_nom, users.users_prenom, seances.date_du_jour, prix.tarif, films.titre FROM reservations LEFT JOIN users ON reservations.users_id = users.users_id LEFT JOIN seances ON reservations.seance_id = seances.seance_id LEFT JOIN prix ON reservations.prix_id = prix.prix_id LEFT JOIN films ON reservations.film_id = films.film_id', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Reservation;