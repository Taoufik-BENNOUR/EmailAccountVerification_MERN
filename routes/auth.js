const express = require('express');
const { userRegister, userLogin, userVerification } = require('../controllers/auth.controller');
const isAuth = require('../middlewares/passport-setup');
const Token = require('../models/Token');
const User = require('../models/User');

const Router = express.Router();

//DELETE "http://localhost:9000/user/register"

Router.post('/register',userRegister)

Router.get('/verify/:id/:token',userVerification)

Router.post('/login',userLogin)

// GET CurrentUser 
Router.get('/currentUser',isAuth(),(req,res)=>{
    res.send(req.user)
}) 

module.exports = Router