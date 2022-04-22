require("dotenv").config({ path: "./config/.env" });
const express = require('express');
const connectDB = require('./config/connectDB');
const user = require("./routes/user");
const auth = require('./routes/auth')
const product = require('./routes/products')
///local middleware

const logger = (req,res,next)=>{
    true ? next() : res.send('blocked')
}
const app = express()
connectDB()
app.use(express.json())
app.use(logger)

//Create end point
app.use('/user',auth)
app.use('/product',product)
app.use('/',user)


//listen
app.listen(process.env.port,(err)=>{
    err? console.log('server connection failed',err):
    // console.log('server connected' + port)
    console.log(
        `The server is running on http://localhost:${process.env.PORT}`
      )
})