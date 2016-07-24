const router = require('express').Router();

router.get('/', function(req,res) {
  res.render('map/map');
});

module.exports = router;
