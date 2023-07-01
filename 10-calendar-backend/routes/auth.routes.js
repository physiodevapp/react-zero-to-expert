/** 
 * User routes
 * host + /api/auth
*/

const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { createUser, userLogin, renewToken } = require('../controllers/auth.controller')
const { fieldValidation } = require('../middlewares/field-validator.middleware')
const { jwtValidate } = require('../middlewares/jwt-validate.middleware')

router.post(
  '/new', 
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 6 chars length at least').isLength({min: 6}),
    fieldValidation
  ],
  createUser
)

router.post(
  '/', 
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 6 chars length at least').isLength({min: 6}),
    fieldValidation
  ],
  userLogin
)

router.get(
  '/renew', 
  jwtValidate,
  renewToken
)

module.exports = router;