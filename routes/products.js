const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct, getProductById, getUserById } = require('../controllers/product.controller')
const isAuth = require('../middlewares/passport-setup')

const Router = express.Router()

Router.get('/products',isAuth(),getAllProducts)

//Add new phone
//POST "http://localhost:9000/product/:idProduct"

Router.post('/addProduct',isAuth(),addProduct)

//Update a phone
//PUT "http://localhost:9000/product/:idProduct"

Router.put('/:idProduct',isAuth(),updateProduct)

//Delete phone
//DELETE "http://localhost:9000/product/:idProduct"

Router.delete('/:idProduct',isAuth(),deleteProduct)

//GET Product By Id
//GET "http://localhost:9000/product/:idProduct"

Router.get("/:idProduct",isAuth(),getProductById)

//GET User and his products 
//GET "http://localhost:9000/product/:idUser"

Router.get('/:idUser',isAuth(),getUserById)

module.exports = Router