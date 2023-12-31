import mongoose from "mongoose";

const userSchema=({
     username:{
        type:String,
        required: true,
        maxlength:32,
        trim:true
     },
     email:{
        type:String,
        required: true,
        trim:true,
        unique:true
     },
     password:{
        type:String,
        required: true,
        trim:true
     }
})

const User= mongoose.model("user", userSchema)
export{User}