
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Film = function (data) {
  this.id = data.id,
    this.titre = data.titre,
    this.genre_id = data.genre_id,
    this.langue_id = data.langue_id,
    this.date_de_sortie = data.date_de_sortie,
    this.synopsis = data.synopsis,
    this.statut_id = data.statut_id,
    this.place_dispo = data.capacite,
    this.img_affiche,
    this.img_background,
    this.img_slider,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Film.getAllfilms = function (result) {

  // Database query
  sql.query('SELECT films.film_id, films.titre, films.genre_id, films.langue_id, films.dimension_id, films.date_de_sortie, films.synopsis, films.statut_id, films.img_affiche, films.img_background, films.img_slider, genres.genre_name, langues.langues_name, dimensions.dimension_name, statuts.statut_name from films LEFT JOIN langues ON films.langue_id= langues.langue_id LEFT JOIN dimensions ON films.dimension_id = dimensions.dimension_id LEFT JOIN genres ON films.genre_id = genres.genre_id LEFT JOIN statuts ON films.statut_id = statuts.statut_id', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
Film.insertAllfilms = function (newfilmInsert, result) {
  var newfilmsInsert = Object.values(newfilmInsert);
  console.log(newfilmInsert);
  var tablefilmInsert = [
    [newfilmsInsert[1], newfilmsInsert[2], newfilmsInsert[3], newfilmsInsert[4], newfilmsInsert[5], newfilmsInsert[6], newfilmsInsert[7], newfilmsInsert[8], newfilmsInsert[9], newfilmsInsert[10]]
  ];
  console.log(tablefilmInsert);

  // Database query
  var query = 'INSERT INTO films (titre, genre_id, langue_id, dimension_id, date_de_sortie, synopsis, statut_id, img_affiche, img_background, img_slider) VALUES ?'

  sql.query(query, [tablefilmInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Film.updateAllfilms = function (newfilmUpdate, result) {
  var newfilmsUpdate = Object.values(newfilmUpdate);
  console.log(newfilmsUpdate);
  var tablefilmUpdate = [
    [newfilmsUpdate[11], newfilmsUpdate[12]]
  ];
  console.log(tablefilmUpdate);

  // Database query
  var query = 'UPDATE films SET ? WHERE id = ?'

  sql.query(query, [tablefilmUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Film.deleteAllfilms = function (newfilmDelete, result) {
  var newfilmsDelete = Object.values(newfilmDelete);
  console.log(newfilmsDelete);
  var tablefilmDelete = [
    [newfilmsDelete[13]]
  ];
  console.log(tablefilmDelete);

  // Database query
  var query = 'DELETE films WHERE id = ?'

  sql.query(query, [tablefilmDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Film.getFilmsOfTheDay = function (request, result) {

  var k = request;
  console.log(k);

  // Database query
  sql.query('SELECT * from films INNER JOIN seances ON films.film_id = seances.film_id WHERE seances.dayweek=?', k, function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};
// Export Object to Controller
module.exports = Film;
