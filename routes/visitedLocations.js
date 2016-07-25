const router = require('express').Router();

const db     = require('../models/visitedLocations.js');

router.get('/', db.getLocations, (req,res) => {
  res.json(res.rows);
})

router.post('/', db.addLocation, (req,res) => {
  res.json(res.rows);
})

router.delete('/:id', db.deleteLocation, (req,res) => {
  res.send(req.params.id);
})

module.exports = router
