const express=require('express')
const categoryController = require('../controllers/category.controller')

const router= express.Router();

router.post('/createCategory',categoryController.createCategory)
router.get('/',categoryController.getAllCategory)


module.exports=router;