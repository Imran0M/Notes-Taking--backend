import express from 'express'
import { createNotes, deleteuser, getUserNotes, updateUserNote } from '../Controller/Notes.js'
const router = express.Router()

// get All user Notes



// get User Notes
router.get('/getnotes', async(req,res)=>{
    try {
        const notes= await getUserNotes(req)
        if(!notes || notes<=0){
            return res.status(200).json({error:"No Content available"})
         }
         res.status(200).json({data:notes})
    } catch (error) {
        res.status(500).json({error: "Server Error"})
        console.log(error)
    }
})

// post user notes

router.post('/createnotes', async(req,res)=>{
    try {
        const noteAdd = await createNotes(req)
        if(!noteAdd){
            res.status(400).json({error:"Error occured in posting"})
        }
        res.status(201).json({message:"Notes Added", data:noteAdd})
    } catch (error) {
        res.status(500).json({error:"Server Error"})
        console.log(error)
    }
})

// update the user notes
router.put('/update/:id', async(req,res)=>{
    try {
        const updateNote = await updateUserNote(req)
    if(!updateNote){
        res.status(400).json({error:"Error occured in updating"})
    }
    res.status(200).json({message:"Notes Added", data:updateNote})
    } catch (error) {
        res.status(500).json({error:"Server Error"})
        console.log(error)
    }
    
})

// Delete the user Notes
router.delete('/delete/:id', async(req,res)=>{
    try {
        const deleteUser = await deleteuser(req)
        if(!deleteUser){
            res.status(400).json({error:"Error occured in Deleting"})
        }
        res.status(200).json({message:"Notes Deleted", delete:deleteUser})
    } catch (error) {
        res.status(500).json({error:"Server Error"})
        console.log(error)
    }
 

})
export const notesRouter =router