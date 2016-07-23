'use strict'
const shoots = require('express').Router()
const nycAPI = require('../models/api')

router.get('/', nycAPI.getShoot, (req, res)=>res.json(res.filtered))

module.exports = router;
