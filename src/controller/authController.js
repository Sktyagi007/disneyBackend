const jwt = require("jsonwebtoken")
const secretKey = "kjds5439jkfdsljfsop"
const userModel = require("../model/userModel");


async function signupController(req,res){
    try{
        let data = req.body;
        let newUser =await userModel.create(data);
        console.log(newUser);
        res.json({
            result:"data recieved",
        })}
    catch(err){
        res.status(500).json({
            result:err.message
        })
    }
}


async function loginController(req,res){
    try{
        let data = req.body;
        // console.log(data);
        let {email,password} = data;
        if(email && password){
            let user = await userModel.findOne({email:email});
            if(user){
                if(user.password == password){
                    //create JWT -> payload, secret key, algo by default -> SHA256
                    const token = jwt.sign({ data: user['_id'] }, secretKey);
                    console.log(token);
                    //put token into cookies
                    res.cookie("JWT",token);
                    console.log(user);
                    res.status(200).json({user});
                }else{
                    res.status(400).json({result:"Email or Password does not match"})
                }
            }else{
                res.status(404).json({result:"User with this email does not exist. Kindly sign up"})
            } 
        }else{
            res.status(400).json({
                result:"Kindly enter email and password both"
            })
        }
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            result:err.message
        })
    }
}


function protectRoute(req,res,next){
    try{
        let cookies = req.cookies;
        let JWT = cookies.JWT;
        if(cookies.JWT){
            const token = jwt.verify(JWT,secretKey);
            console.log(token);
            let userId = token.data;
            req.userId = userId;
            next();
        }else{
            res.send("You are not logged in. Kindly login");
        }
    }catch(err){
        console.log(err);
        res.send(err.message)
    }   
}

module.exports = {
    signupController,
    loginController,
    // resetPasswordController,
    // forgetPasswordController,
    protectRoute
}