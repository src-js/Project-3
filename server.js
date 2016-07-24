'use strict'

// This tests to see if we have an environment.
// Only load the dotenv if we need it.
const env           = process.env.NODE_ENV || 'development';
const DEV           = env==='development';
const dotenv        = DEV && require('dotenv').config();

// regular stuff
const express       = require('express');
const bodyParser    = require('body-parser');
const logger        = require('morgan');
const path          = require('path');
const map           = require('./routes/map');
const visitedRoute  = require('./routes/visitedLocations');
const api           = require('./routes/api');

const app           = express();
const PORT          = process.argv[2] || process.env.port || 3000;

// setting our view engine and views directory
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// setting out static assets directory
app.use(express.static(path.join(__dirname,'dist')));

// set up some logging
app.use( logger(DEV ? 'dev' : 'common'));

// we're only going to accept json
app.use(bodyParser.json());

// Let's go!
app.listen(PORT, ()=> console.log('server started on port', PORT ))

// routes
app.use('/map', map);
app.use('/visited', visitedRoute);
app.use( '/api', api );
app.use( '/api/users',  require('./routes/users') )

