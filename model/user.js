const mongoose = require('mongoose');


const UserSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true
      },
      mobile:{
        type:String,
        required:true
      },
      project:{
        type:String,
        required:true
      },
    
},{timestamps:true})

const UserModel=mongoose.model("userDetail", UserSchema)

module.exports=UserModel