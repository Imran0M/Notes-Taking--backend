import express from 'express'
import { User } from "../Modals/User.js";
import bcrypt from 'bcrypt'
import { generateToken, getUserByEmail } from "../Controller/User.js";
const router = express.Router()

//Sign UP post api

router.post('/signup', async (req, res) => {
    try {
        // To check User is already exist
        let userEmail = await getUserByEmail(req)
        if (userEmail) {
            res.status(400).json({ message: "User is already Exist" })
        }
        // password Encryption using bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = await new User({
            ...req.body,
            password: hashedPassword
        }).save()
        // generate Token
        const token = generateToken(user._id)
        res.status(201).json({
            message: "Registered Sucessfully",
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "An error occured in registration" })
    }
})


//Login API POST Method

router.post('/login', async (req, res) => {
    try {
        //To check User is Exist if exist then proceed
        let userEmail = await getUserByEmail(req)
        if (!userEmail) {
            res.status(400).json({ error: "User Unauthorized" })
        }
        //check the hashed password is same
        const checkPassword = await bcrypt.compare(
            req.body.password,
            userEmail.password
        )
        if (!checkPassword) {
            res.status(400).json({ error: "In correct password" })
        }
        //generate Token
        const token = generateToken(userEmail._id)
        res.status(201).json({
            message: "Login Sucessfully",
            token, 
        })
    } catch (error) {
        res.status(500).json({ error:"Server Error" })
    }

})

export const useRouter = router