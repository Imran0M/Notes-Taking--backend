import mongoose from "mongoose";

export default function dbConnection(){
    mongoose.connect(process.env.DB_url, {})
    try {
        console.log('DB Connected')
    } catch (error) {
        console.log('Could not connect',error)
    }
}
