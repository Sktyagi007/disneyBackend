const mongoose = require('mongoose');
const {Schema} = mongoose;
const pass = require('../../secret');

let dbLink =  `mongodb+srv://sarthak:${pass}@cluster0.gxk37xn.mongodb.net/test`

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})

let userSchema = new Schema({
    Firstname:{
        type:String,
        required:[true,"Name is not given. Please provide a name"]
    },
    Lastname:{
        type:String,
        required:[true,"Name is not given. Please provide a name"]
    },
    password:{
        type:String,
        required:[true,"Password is missing"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm Password is Missing"],
        //CUSTOM VALIDATOR
        validate:{
            validator:function(){
                return this.password == this.confirmPassword;
            },
            //error message
            message:"password mismatch"
        }
    },
    email:{
        type:String,
        required:[true,'email is missing'],
        unique:true
    },
    phoneNumber:{
        type:String,
        minLength:[10,"less than 10 numbers"],
        maxLength:[10,"more than 10 numbers"]
    },
    companyname:{
        type:String,
        required:[true,"CompanyName is not given. Please provide a CompanyName"]
    },
    otp:{
        type:String
    },
    otpExpiry:{
        type:Date
    },
    designation:{
        type:String,
        required:[true,"Designation is not given. Please provide a Designation"]
    }
},{versionKey: false})

const userModel = mongoose.model('DisneyModel',userSchema);

module.exports = userModel;