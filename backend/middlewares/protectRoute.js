import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async (req , res , next) =>{
try {
    const token = req.cookies.jwt;
    
    if(!token){
        return res.status(401).json({error:"unauthorized - no token provided"});
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    if(!decoded){
        return res.status(401).json({error:"unauthorized - invalid token"});
    }

    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        return res.status(401).json({error:"unauthorized - no user found"});
    }

    req.user = user; // add user to request object so that we can access it in the next middleware or controller 

    next();

} catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(401).json({error:"internal server error"});
}

};
export default protectRoute;