//Help with adding to the DB from Mike Stenzler's Muvie Haus solution

'use strict'

const router = require('express').Router()
const myDB = require('../models/db')

router.get('/', myDB.testFunction, (req, res)=>res.json(res.filtered));
router.post('/', myDB.addBorough, (req, res)=>res.json(res.filtered));

module.exports = router;
