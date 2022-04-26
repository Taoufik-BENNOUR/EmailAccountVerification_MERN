const express = require('express');
const { userRegister, userLogin, userVerification, newpasswordToken, passwordTokenVerification, resetPassword } = require('../controllers/auth.controller');
const isAuth = require('../middlewares/passport-setup');


const Router = express.Router();

//DELETE "http://localhost:9000/user/register"

Router.post('/register',userRegister)
Router.post('/login',userLogin)

Router.get('/verify/:id/:token',userVerification)

Router.post('/forgotpassword',newpasswordToken)
Router.get('/passwordTokenVerification/:id/:token',passwordTokenVerification)
Router.post('/changepassword/:id/:token',resetPassword)

// GET CurrentUser 
Router.get('/currentUser',isAuth(),(req,res)=>{
    res.send(req.user)
}) 

module.exports = Router