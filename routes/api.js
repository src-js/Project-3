'use strict'
const router            = require('express').Router()
const shootAPI          = require('../models/api')

const tokenService      = require('../service/tokenService')

/* get the database middleware */
const userService = require('../models/user')

const sendError = (err,req,res,next)=>res.status(401).json(err)

/* This is whre the user logs in */
router.post('/authenticate',
            userService.getUserByUsername,
            tokenService.createToken,
            sendError)

router.get('/', shootAPI.getShoot, (req, res)=>res.json(res.filtered))

module.exports = router;
