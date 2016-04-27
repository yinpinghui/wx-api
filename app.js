var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bunyan = require('bunyan');

var logger = bunyan.createLogger({
    name: "wxlog",                     // logger name
    serializers: {
        req: bunyan.stdSerializers.req,     // standard bunyan req serializer
        err: bunyan.stdSerializers.err      // standard bunyan error serializer
    },
    streams: [{
        type: 'rotating-file',
        path: '/var/log/wx-api.log',
        period: '1d',   // daily rotation
        count: 60        // keep 60 back copies
    }]
});

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var mp = require('./routes/mp');

var app = express();

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', function (req, res, next) {
    req.log = logger;
    next();
});


app.use('/', routes);
app.use('/mp', mp);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
