import jwt from 'jsonwebtoken'
import { getUserById } from '../Controller/User.js';

const isAuthorized= async(req,res,next)=>{
    let token;
    try {
         if(req.header){
         token = await req.headers['x-auth-token']
         const decode = jwt.verify(token , process.env.SECRET_KEY)
        //  console.log(decode)
         req.user = await getUserById(decode.id)
         next()
        }
    } catch (error) {
        res.status(500).json({error:"Server Error"})
    }
}

export {isAuthorized}