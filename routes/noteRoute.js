// const express=require('express');
// const router=express.Router();

// const Note=require('../models/noteModel')

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0');
// var yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;

// let count=1;

// router.route("/create").post((req, res) => {
//     const sl=count
//     const Date=today
//     const Name=req.body.Name;
//     const Email=req.body.Email;
//     const Contact=req.body.Contact;
//     const Description=req.body.Description;

//     const newNote=new Note({
//         sl,
//         Date,
//         Name,
//         Email,
//         Contact,
//         Description
//     })
//     newNote.save();
//     count=count+1;
// })

// router.route("/notes").get((req, res) => {
//     Note.find()
//         .then(foundNotes=>res.json(foundNotes));
// })

// module.exports=router;
