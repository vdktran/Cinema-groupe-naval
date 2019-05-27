
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Session = function (data) {
	this.id = data.id
	this.dayweek = data.dayweek;
	this.film_id = data.film;
	this.date_du_jour = data.startdate;
	this.dimension_id = data.dimension;
	this.langue_id = data.langue;
	this.salle_id = data.salle;
	this.place_dispo = data.capacite;
	this.update = data.update;
	this.idUpdate = data.idUpdate;
	this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Session.getAllSessions = function (result) {
	{ console.log(this.id) }
	// Database query
	sql.query('SELECT seances.seance_id, seances.salle_id, salles.salle_name, salles.capacite, seances.film_id, films.titre, seances.date_du_jour, seances.dayweek, seances.dimension_id , dimensions.dimension_name, seances.langue_id, langues.langues_name, seances.place_dispo from seances LEFT JOIN films ON seances.film_id = films.film_id LEFT JOIN salles ON seances.salle_id = salles.salle_id LEFT JOIN dimensions ON seances.dimension_id = dimensions.dimension_id LEFT JOIN langues ON seances.langue_id = langues.langue_id', function (err, res, fields) {
		if (err) throw err;
		result(null, res);
	});

};


// Define Object method to be used by a Controller
Session.insertAllSessions = function (newSessionInsert, result) {
	var newSessionsInsert = Object.values(newSessionInsert);
	console.log(newSessionInsert);
	var tablesessionInsert = [
		[newSessionsInsert[1], newSessionsInsert[2], newSessionsInsert[3], newSessionsInsert[4], newSessionsInsert[5], newSessionsInsert[6], newSessionsInsert[7]]
	];
	console.log(tablesessionInsert);

	// Database query
	var query = 'INSERT INTO seances (dayweek, film_id, date_du_jour, dimension_id, langue_id, salle_id, place_dispo) VALUES ?'

	sql.query(query, [tablesessionInsert], function (err, res, fields) {
		if (err) throw err;
		result(null, res);
	});
};

Session.updateAllSessions = function (newsessionUpdate, result) {
	var newsessionsUpdate = Object.values(newsessionUpdate);
	console.log(newsessionsUpdate);
	var tablesessionUpdate = [
		[newsessionsUpdate[8], newsessionsUpdate[9]]
	];
	console.log(tablesessionUpdate);

	// Database query
	var query = 'UPDATE seances SET ? WHERE id = ?'

	sql.query(query, [tablesessionUpdate], function (err, res, fields) {
		if (err) throw err;
		result(null, res);
	});
};

Session.deleteAllSessions = function (newsessionDelete, result) {
	var newsessionsDelete = Object.values(newsessionDelete);
	console.log(newsessionsDelete);
	var tablesessionDelete = [
		[newsessionsDelete[10]]
	];
	console.log(tablesessionDelete);

	// Database query
	var query = 'DELETE seances WHERE id = ?'

	sql.query(query, [tablesessionDelete], function (err, res, fields) {
		if (err) throw err;
		result(null, res);
	});
};

Session.getSeancesOfTheDay = function (request, result) {

	// var queryOfTeDay =day();
	console.log("request : " + request);
	var queryOfTeDay = request;
	console.log('lundi : ' + request[0]);
	// Database query
	sql.query('SELECT * from films INNER JOIN seances ON films.film_id = seances.film_id WHERE seances.dayweek=? && seances.film_id=?', queryOfTeDay, function (err, res, fields) {
		if (err) throw err;

		result(null, res);
		console.log(res);
	});

};

// Export Object to Controller
module.exports = Session;
