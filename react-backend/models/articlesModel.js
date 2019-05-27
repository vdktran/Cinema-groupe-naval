
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var article = function (data) {
    this.id = data.id,
        this.dayweek = data.dayweek,
        this.article_img = data.article_img,
        this.article_title = data.article_title,
        this.article_text = data.article_text,
        this.auteur = data.auteur,
        this.article_date = data.article_date,
        this.update = data.update,
        this.idUpdate = data.idUpdate,
        this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

article.getAllarticles = function (result) {

    // Database query
    sql.query('SELECT * from articles', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });

};


// Define Object method to be used by a Controller
article.insertAllarticles = function (newarticleInsert, result) {
    var newarticlesInsert = Object.values(newarticleInsert);
    console.log(newarticleInsert);
    var tablearticleInsert = [
        [newarticlesInsert[1], newarticlesInsert[2], newarticlesInsert[3], newarticlesInsert[4], newarticlesInsert[5]]
    ];
    console.log(tablearticleInsert);

    // Database query
    var query = 'INSERT INTO articles (article_img, article_title, article_text, auteur, article_date) VALUES ?'

    sql.query(query, [tablearticleInsert], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};

article.updateAllarticles = function (newarticleUpdate, result) {
    var newarticlesUpdate = Object.values(newarticleUpdate);
    console.log(newarticlesUpdate);
    var tablearticleUpdate = [
        [newarticlesUpdate[6], newarticlesUpdate[7]]
    ];
    console.log(tablearticleUpdate);

    // Database query
    var query = 'UPDATE articles SET ? WHERE id = ?'

    sql.query(query, [tablearticleUpdate], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};

article.deleteAllarticles = function (newarticleDelete, result) {
    var newarticlesDelete = Object.values(newarticleDelete);
    console.log(newarticlesDelete);
    var tablearticleDelete = [
        [newarticlesDelete[8]]
    ];
    console.log(tablearticleDelete);

    // Database query
    var query = 'DELETE articles WHERE id = ?'

    sql.query(query, [tablearticleDelete], function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    });
};
// Export Object to Controller
module.exports = article;
