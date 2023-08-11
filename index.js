const express = require('express')
const mongoose = require('mongoose');
// const connectDb=require('./db/connect_db')
const router=require("./routes/web")
const app = express()
const dotenv = require('dotenv').config()
const cors=require('cors')
// const port = 3000
const connectDb=require("./db/connect_db")
const bodyParser = require('body-parser')
const fileUpload=require('express-fileupload')


// set template
app.set('view engine', 'ejs')
app.use(express.static('public'))

// cors
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(fileUpload({useTempFiles:true}))

// Database Connection
connectDb()

// Router Link
app.use('/',router)



// listen port server
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})