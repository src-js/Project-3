//Help with adding to the DB from Mike Stenzler's Muvie Haus solution

'use strict'

const request = require('request');

const pg = require('pg-promise')({
// Initialization Options
});

const config = {
  host:       process.env.PG_HOST,
  port:       process.env.PG_PORT,
  database:   'project3test',
  user:       process.env.PG_USER,
  password:   process.env.PG_PASSWORD,
};

const _db = pg(config);

module.exports = {
  /*Add a Borough to the DB */
  addBorough(req,res,next) {
    console.log('Running addBorough');
    _db.any(
      `INSERT into
      visited (borough)
      VALUES ($/borough/)
      returning *;`, req.query
      )
    .then(data=>{
      console.log('.then borough is: ' + data[0].borough);
      res.rows=data[0].borough;
      next();
    })
    .catch(error=>{
      console.error('ERROR in adding borough', error)
      throw error;
    })
  },


  testFunction(req,res,next) {
    request({
      url: 'http://data.cityofnewyork.us/resource/6aka-uima.json/',
      qs: req.query,
      json: true},
      function(err, response, body){
        if(err) throw err;
        res.filtered = body;
        next()
      }
    )
  }



}
