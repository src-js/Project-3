const _db     = require('./connection');

module.exports = {
  getLocations(req, res, next) {
    _db.any("SELECT * FROM visited;")
    .then( data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.error('Error ',error);
      throw error;
    })
  },
  addLocation(req, res, next) {
    _db.any(`INSERT INTO visited (address, borough, category, subcategoryname) VALUES ($1, $2, $3, $4) returning *;`,
      [req.body.location, req.body.borough, req.body.category, req.body.subCategory])
      .then( data => {
        console.log('ADDED LOCATION SUCCESSFUL')
        res.rows = data;
        next();
      })
      .catch( error => {
        console.error('ERROR in ADDING LOCATION!', error);
        throw error;
      })
  }
  // deleteLocation(req, res, next) {
  //   _db.none(`
  //     delete * from visited
  //     where id = $1
  //    `, [req.params.id])

  //   .then( data => {
  //       console.log('DELETED LOCATION SUCCESSFUL')
  //       res.rows = data;
  //       next();
  //     })
  //     .catch( error => {
  //       console.error('ERROR in DELETING LOCATION!', error);
  //       throw error;
  //     })
  // },
}
