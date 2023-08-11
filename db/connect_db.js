
const mongoose = require('mongoose');
// const dotenv = require('dotenv').config()

const connectDb=()=>{

   return mongoose.connect(process.env.DB_URL)
  .then(() =>{
    console.log('Connected!')
  })
  .catch((error)=>{
    console.log('error!')
  });
}

module.exports=connectDb