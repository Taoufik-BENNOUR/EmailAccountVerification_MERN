const express = require("express")
const { getUserById } = require("../controllers/product.controller")
const isAuth = require('../middlewares/passport-setup')

const Router = express.Router()


Router.get('/oneuser', isAuth(),getUserById)


module.exports = Router