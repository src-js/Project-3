'use strict'
const request = require('request')

module.exports = {
  getShoot(req, res, next){
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
