exports.seances = function (req, res) {
	// Comment out this line:
  //res.send('respond with a resource');
  connection.query('SELECT * from seances', function (error, results, fields) {
		if (error) throw error;
    res.json(results);
  });
};