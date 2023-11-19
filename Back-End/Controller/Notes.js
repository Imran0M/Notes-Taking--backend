import { Note } from "../Modals/Notes.js";
// Get Notes
export function getUserNotes(req){
    return Note.find({user: req.user.id}).populate('user', 'username')
}
// create Notes
export function createNotes(req){
    const date = new Date().toJSON().slice(0,10)
    return new Note({
        ...req.body,
        date: date,
        user: req.user._id
    }).save()
}
// update Notes
export function updateUserNote(req){
    return Note.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body},
        {new:true}
    )
}
// delete user
export function deleteuser(req){
    return Note.findByIdAndDelete({_id: req.params.id})
}
