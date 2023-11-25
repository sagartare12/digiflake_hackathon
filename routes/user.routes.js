const express = require('express')
const authController = require('../controllers/auth.controller')

const router =express.Router();


router.post('/signup',authController.signUp);

router.post('/login',authController.logIn);
router.get('/logout',authController.logout)
router.get('/',authController.protect,authController.getAllUsers)



module.exports=router;