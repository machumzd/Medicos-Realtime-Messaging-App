const {login,signup}=require("../controllers/auth")
const express=require("express")
const router=express.Router()
console.log("hello its from backend auth ")


router.post('/signup',signup)
router.post('/login',login)

module.exports=router