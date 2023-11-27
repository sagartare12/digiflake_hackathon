const express = require('express')
const authController = require('../controllers/auth.controller')
const cartController = require('../controllers/cart.controller')
const router =express.Router();


router.post('/signup',authController.signUp);

router.post('/login',authController.logIn);
router.get('/logout',authController.logout)
router.get('/',authController.protect,authController.getAllUsers)
router.post('/cart/:id',authController.protect,cartController.createUserCart)
router.get('/allcart',authController.protect,cartController.getAllCart)
router.patch('/iteminc/:id',authController.protect,cartController.increaseItem)
router.patch('/itemdec/:id',authController.protect,cartController.decreaseItem)
router.patch('/cart/:id',authController.protect,cartController.deleteItem)


module.exports=router;