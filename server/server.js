// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
mongoose.connect('mongodb://localhost/ppdb');
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
// Models
var Party = mongoose.model('Party', {
    address: String,
    date: String,
    startTime: String,
    endTime: String,
    host: String,
    lat: Number,
    long: Number
});
 
// Routes
 
    // Get reviews
    app.get('/api/parties', function(req, res) {
 
        console.log("fetching parties");
 
        // use mongoose to get all reviews in the database
        Party.find(function(err, parties) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(parties); // return all reviews in JSON format
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/api/parties', function(req, res) {
 
        console.log("creating party");
 
        // create a review, information comes from request from Ionic
        Party.create({
            address : req.body.address,
            date : req.body.date,
            startTime : req.body.startTime,
            endTime : req.body.endTime,
            host : req.body.host,
            lat : req.body.lat,
            long : req.body.long,
            done : false
        }, function(err, party) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Party.find(function(err, parties) {
                if (err)
                    res.send(err)
                res.json(parties);
            });
        });
 
    });
 
    // delete a review
    app.delete('/api/parties/:party_id', function(req, res) {
        console.log(req)
        Party.remove({
            _id : req.params.party_id
        }, function(err, party) {
 
        });
    });
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");