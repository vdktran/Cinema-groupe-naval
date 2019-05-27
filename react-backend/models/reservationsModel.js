
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var reservation = function (data) {
  this.id = data.id,
    this.user_id = data.user_id,
    this.seances_id = data.seance_id,
    this.prix_id = data.prix_id,
    this.quantite = data.quantite,
    this.film_id = data.film_id,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

reservation.getAllreservations = function (result) {

  // Database query
  sql.query('SELECT reservations.reservation_id, reservations.users_id, reservations.seance_id, reservations.prix_id, reservations.quantite, reservations.film_id, users.users_nom, users.users_prenom, seances.date_du_jour, prix.tarif, films.titre FROM reservations LEFT JOIN users ON reservations.users_id = users.users_id LEFT JOIN seances ON reservations.seance_id = seances.seance_id LEFT JOIN prix ON reservations.prix_id = prix.prix_id LEFT JOIN films ON reservations.film_id = films.film_id', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
reservation.insertAllreservations = function (newreservationInsert, result) {
  var newreservationsInsert = Object.values(newreservationInsert);
  console.log(newreservationInsert);
  var tablereservationInsert = [
    [newreservationsInsert[1], newreservationsInsert[2], newreservationsInsert[3], newreservationsInsert[4], newreservationsInsert[5]]
  ];
  console.log(tablereservationInsert);

  // Database query
  var query = 'INSERT INTO reservations (users_id, seance_id, prix_id, quantite, film_id) VALUES ?'

  sql.query(query, [tablereservationInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

reservation.updateAllreservations = function (newreservationUpdate, result) {
  var newreservationsUpdate = Object.values(newreservationUpdate);
  console.log(newreservationsUpdate);
  var tablereservationUpdate = [
    [newreservationsUpdate[8], newreservationsUpdate[9]]
  ];
  console.log(tablereservationUpdate);

  // Database query
  var query = 'UPDATE reservations SET ? WHERE id = ?'

  sql.query(query, [tablereservationUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

reservation.deleteAllreservations = function (newreservationDelete, result) {
  var newreservationsDelete = Object.values(newreservationDelete);
  console.log(newreservationsDelete);
  var tablereservationDelete = [
    [newreservationsDelete[10]]
  ];
  console.log(tablereservationDelete);

  // Database query
  var query = 'DELETE reservations WHERE id = ? '

  sql.query(query, [tablereservationDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = reservation;
