
// Default set up by express generator
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Require Routes
var indexRouter = require('./routes/index');
var filmsRouter = require('./routes/filmsRoute');
var contactPostRouter = require('./routes/contactPostRoute');
var genreRouter = require('./routes/genreRoute');
var langueRouter = require('./routes/languesRoute');
var statusRouter = require('./routes/statusRoute');
var dimensionRouter = require('./routes/dimensionRoute');
var sessionRouter = require('./routes/sessionRoute');
var salleRouter = require('./routes/sallesRoute');
var sessionPostRouter = require('./routes/sessionPostRoute');
var prixRouter = require('./routes/prixRoute');
var reservationRouter = require('./routes/reservationRoute');


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
app.use('/films', filmsRouter);
app.use('/contactpost', contactPostRouter);
app.use('/genres', genreRouter);
app.use('/langues', langueRouter);
app.use('/status', statusRouter);
app.use('/dimension', dimensionRouter);
app.use('/seances', sessionRouter);
app.use('/salles', salleRouter);
app.use('/seancespost', sessionPostRouter);
app.use('/prix', prixRouter);
app.use('/reservations', reservationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
