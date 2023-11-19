import { User } from "../Modals/User.js";
import  jwt  from "jsonwebtoken";
// get user email
export function getUserByEmail(request){
    return User.findOne({
        email: request.body.email,
    });
}
//get user by id
export function getUserById(id){
    return User.findById(id)
}
// generate token
export function generateToken(id){
 return jwt.sign({id}, process.env.SECRET_KEY)
}
