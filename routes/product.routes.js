const express=require('express')
const productController = require('../controllers/product.controller')

const router= express.Router();

router.post('/createproduct',productController.createProduct)
router.get('/',productController.getAllProducts)


module.exports=router;