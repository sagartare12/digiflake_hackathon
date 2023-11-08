const express = require('express')
const authController = require('../controllers/auth.controller')

const router =express.Router();


router.post('/signup',authController.signUp);

router.get('/get',authController.get)

module.exports=router;