const express = require('express');
const { userRegister, userLogin } = require('../controllers/auth.controller');
const isAuth = require('../middlewares/passport-setup');
const Token = require('../models/Token');
const User = require('../models/User');

const Router = express.Router();

//DELETE "http://localhost:9000/user/register"

Router.post('/register',userRegister)

Router.get('/verify/:id/:token',async(req,res)=>{
    try {
        const user= await User.findOne({_id:req.params.id})
        if(!user) return res.status(400).send("invalid link")
        const verification = await Token.findOne({userId:user._id,token:req.params.token})

        if(!verification) return res.status(400).send("invalid link")
        await User.updateOne({_id:user._id,verified:true})
        await Token.findByIdAndRemove(req.params.token)
        res.send("email verified")
    } catch (error) {
        res.status(400).send("error")
    }
})

Router.post('/login',userLogin)

// GET CurrentUser 
Router.get('/currentUser',isAuth(),(req,res)=>{
    res.send(req.user)
}) 

module.exports = Router