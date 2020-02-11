// const express=require('express');
// const userPermission=require('../models/user_permission');
// const cookieSession = require('cookie-session');
// const bcrypt = require('bcryptjs');
// var myParser = require("body-parser");
// const { body, validationResult } = require('express-validator');
//
// const router=new express.Router();
//
// const another = require('../index');
// //=============================================
// // DECLARING CUSTOM MIDDLEWARE
// const ifNotLoggedin = (req, res, next) => {
//     if(!req.session.isLoggedIn){
//         return res.render('auth/login-register.hbs');
//     }
//     next();
// };
//
// const ifLoggedin = (req,res,next) => {
//     if(req.session.isLoggedIn){
//         return res.redirect('/dashboard');
//     }
//     next();
// };
//
// //================================
// //user permission view
//
// router.get('/Permission',ifNotLoggedin,(req,res,next)=>{
//
//     try
//     {
//
//         userPermission.find({}).then(user_Permission => {
//             res.render('user_permission/view.hbs',{
//                 user_Permission:user_Permission,
//                 url: req.protocol + '://' + req.get('host'),
//
//             });
//         })
//
//     }
//     catch(e)
//     {
//         res.status(500).send()
//
//     }
//
// });
//
// //================================================================================================================
// // user permission add view (get)
// router.get('/user_permission/add',ifNotLoggedin, (req, res) => {
//     res.render('user_permission/add.hbs', {
//         // morris: true
//     });
// });
// //================================================================================================================
// // user permission add view (post)
// router.post('/user_permission/add',ifNotLoggedin,[
//
//     body('title','Title is Empty!').trim().not().isEmpty(),
//     body('description','Description is Empty!').trim().not().isEmpty(),
//
// ], (req,res,next) => {
//
//     const validation_result = validationResult(req);
//     const {title,description} = req.body;
//     // IF validation_result HAS NO ERROR
//     // console.log(first_name,last_name, email,password, phone,gender,country,city,user_type);
//     if(validation_result.isEmpty()){
//
//         // INSERTING USER INTO DATABASE
//         userPermission.create({
//             title: title,
//             shortDescription: description,
//
//         }) .then(result => {
//             res.redirect('/Permission');
//             // res.send(`your account has been created successfully, Now you can <a href="/dashboard">Login</a>`);
//         }).catch(err => {
//             // THROW INSERTING USER ERROR'S
//             if (err) throw err;
//         });
//
//     }
//     else{
//         // return res.status(422).json({errors:validation_result.array()});
//         // COLLECT ALL THE VALIDATION ERRORS
//         let allErrors = validation_result.errors.map((error) => {
//             return error.msg;
//         });
//         // REDERING login-register PAGE WITH VALIDATION ERRORS
//         res.render('user_permission/add.hbs',{
//             register_error:allErrors,
//             old_data:req.body
//         });
//     }
// });
// //================================
//
// //delete user
// router.delete('/user_permission/delete/:id',async (req,res)=>{
//
//     try
//     {
//         console.log(req);
//         const user_permission=await userPermission.findByIdAndRemove(req.params.id);
//         if(!user_permission)
//         {
//             return res.status(404).send()
//         }
//
//         res.redirect('Permission');
//     }
//     catch(e)
//     {
//         res.status(500).send({error:"errrr"})
//     }
// });
// //===============================
// router.get('/user_permission/edit', (req, res) => {
//     // res.render('country/edit.hbs', {
//     // 	// morris: true
//     // });
//
//     var id = req.param('id');
//     userPermission.findById(id, function (err, userPermission) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('user_permission/edit.hbs', { user_permission: userPermission });
//         }
//     });
//     // res.render( 'categories/edit.hbs', { id:id } );
//
// });
//
// //================================
//
// router.post('/user_permission/edit/:id',async(req,res)=>{
//     // const updates=Object.keys(req.body);
//     // const allowedUpdates=['name'];
//     // const isValid=updates.every((update)=>allowedUpdates.includes(update));
//     //
//     // if(!isValid)
//     // {
//     //     return res.status(400).send({error:'Errr'})
//     // }
//     console.log(req.body);
//     try
//     {
//         const userPermission=await userPermission.findByIdAndUpdate(req.params.id,{ title: 'ffffffffff', shortDescription: 'ffffffffffffff' }
//             ,{new:true});
//
//         if(!userPermission)
//         {
//             return res.status(404).send()
//         }
//
//         req.flash('success', 'Data updated successfully!')
//         return res.send(Permission)
//     }
//     catch(e)
//     {
//
//         return res.status(500).send()
//     }
//
//
// })
//
// //================================
