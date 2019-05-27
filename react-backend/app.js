
// Default set up by express generator
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Require Routes
var indexRouter = require('./routes/index');

var genreRouter = require('./routes/genresRoute');

var articleRouter = require('./routes/articlesRoute');

var contactRouter = require('./routes/contactsRoute');

var dimensionRouter = require('./routes/dimensionsRoute');

var filmRouter = require('./routes/filmsRoute');

var langueRouter = require('./routes/languesRoute');

var newsletterRouter = require('./routes/newslettersRoute');

var prixRouter = require('./routes/prixRoute');

var reservationRouter = require('./routes/reservationsRoute');

var salleRouter = require('./routes/sallesRoute');

var sessionRouter = require('./routes/sessionsRoute');

var usersRouter = require('./routes/usersRoute');

var statusRouter = require('./routes/statusRoute');



//define express use
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Default set up by express generator
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Use Routes
app.use('/', indexRouter);

app.use('/genres', genreRouter);
app.use('/genreInsert', genreRouter);
app.use('/genreUpdate', genreRouter);
app.use('/genreDelete', genreRouter);

app.use('/article', articleRouter);
app.use('/articleInsert', articleRouter);
app.use('/articleUpdate', articleRouter);
app.use('/articleDelete', articleRouter);

app.use('/contact', contactRouter);
app.use('/contactInsert', contactRouter);
app.use('/contactUpdate', contactRouter);
app.use('/contactDelete', contactRouter);
//IL MANQUE UNE ROUTE POUR CRITIQUE MAIS PAS DE DATA ET PAS ENCORE EXPLOITE ET C'EST SAMEDI J'AI LA FLEMME 
//MASHALLA
app.use('/dimension', dimensionRouter);
app.use('/dimensionInsert', dimensionRouter);
app.use('/dimensionUpdate', dimensionRouter);
app.use('/dimensionDeleter', dimensionRouter);

app.use('/films', filmRouter);
app.use('/filmsInsert', filmRouter);
app.use('/filmsUpdate', filmRouter);
app.use('/filmsDelete', filmRouter);

app.use('/langues', langueRouter);
app.use('/languesInsert', langueRouter);
app.use('/languesUpdate', langueRouter);
app.use('/languesDelete', langueRouter);

app.use('/newsletter', newsletterRouter);
app.use('/newsletterInsert', newsletterRouter);
app.use('/newsletterUpdate', newsletterRouter);
app.use('/newsletterDelete', newsletterRouter);

app.use('/prix', prixRouter);
app.use('/prixInsert', prixRouter);
app.use('/prixUpdate', prixRouter);
app.use('/prixDelete', prixRouter);

app.use('/reservations', reservationRouter);
app.use('/reservationsInsert', reservationRouter);
app.use('/reservationUpdate', reservationRouter);
app.use('/reservationDelete', reservationRouter);

app.use('/salles', salleRouter);
app.use('/sallesInsert', salleRouter);
app.use('/sallesUpdate', salleRouter);
app.use('/salleDelete', salleRouter);

app.use('/seances', sessionRouter);
app.use('/seancesInsert', sessionRouter);
app.use('/seancesUpdate', sessionRouter);
app.use('/seancesDelete', sessionRouter);

app.use('/users', usersRouter);
app.use('/usersInsert', usersRouter);
app.use('/usersUpdate', usersRouter);
app.use('/usersDelete', usersRouter);

app.use('/status', statusRouter);
app.use('/statusInsert', statusRouter);
app.use('/statusUpdate', statusRouter);
app.use('/statusDelete', statusRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
