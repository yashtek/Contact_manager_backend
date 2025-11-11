const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerUser = asyncHandler(async (req , res) =>{
    const{username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");

    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already registerd!");
     
    }

    const hasedPassword = await bcrypt.hash(password,10);
    console.log("Hashed",hasedPassword);

    const user = await User.create({
        username,
        email,
        password:hasedPassword,
    });

    console.log(`user created: ${user}`);
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data us not valid");
    }

});




const loginuser = asyncHandler(async (req, res)=>{
    const{email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandotory");
    }
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username:user.username,
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "20m"});
        res.status(200).json({accessToken});
    }else{
        res.status(401)
        throw new Error("email or password are not correct");
    }
    res.json({message: "user login"});
});



const currentuser = asyncHandler(async (req, res) =>{
    res.json({message:"contact user"});
});

module.exports = {registerUser,loginuser,currentuser};