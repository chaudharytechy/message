const express=require('express')
const router=express.Router()

//controller
const FrontController = require('../Controller/FrontController')



router.get('/',FrontController.home)
// user Routing 

router.post('/userinsert',FrontController.userinsert)
router.get('/user_dataget',FrontController.user_dataget)
router.delete('/user_datadelete/:id',FrontController.user_datadelete)


module.exports=router