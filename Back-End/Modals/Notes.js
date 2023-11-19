import { ObjectId } from "bson";
import mongoose from "mongoose";

const notesSchema=({
    title:{
        type:String,
        required: true,
    },
    notes:{
        type:String,
        required: true,
    },
    date:{
        type:String,
        required: true,
    },
    user:{
        type: ObjectId,
        ref: "user"
    }
})

const Note = mongoose.model('notes', notesSchema)
export {Note}