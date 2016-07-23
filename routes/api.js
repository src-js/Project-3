'use strict'
const router = require('express').Router()
const shootAPI = require('../models/api')

router.get('/', shootAPI.getShoot, (req, res)=>res.json(res.filtered))

module.exports = router;
