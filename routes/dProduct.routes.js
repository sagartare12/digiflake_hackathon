const express=require('express')
const dProductController = require('../controllers/dProduct.controller')

const router= express.Router();

router.post('/createDProduct',dProductController.createDProduct)
router.get('/',dProductController.getAllDProduct)


module.exports=router;