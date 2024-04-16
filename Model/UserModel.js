const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema ({

    firstName : {
        type:String,
        required:[true,'Please Enter your firstname'],
        trim:true
    },
    lastName:{
        type:String,
        required:[true,'Please Enter your lastname'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Please Enter your email'],
        trim:true,
        unique:true,
        validate:[validator.isEmail,'please enter a valid email']
     },
     
     password:{
        type:String,
        require:true,
        minlength:8,
        trim:true

     },

     contactNum:{
        type:String,
        required:[true,'Please Enter your contactnumber'],
        require:true,
        trim:true
     },
     address:{
        type:String,
        required:[true,'Please Enter your Address'],
        require:true, 
     },
     state:{
        type:String,
        required:[true,'Please Enter your state'],
        require:true, 
     },
     city:{
        type:String,
        required:[true,'Please Enter your city'],
        require:true, 
     },
     pincode:{
        type:String,
        required:[true,'Please Enter your pincode'],
        require:true, 
     },
     activeInd:{
        type:String,
        default:1
     },
     profileUrl:{
        type:String,
        //require:true, 
     },
     role:{
        type:String,
        //required:[true,'Please select your role'],
     },
     createdAt: {
      type: Date,
      default: Date.now(),
    },

}) 

module.exports = mongoose.model('User',UserSchema)