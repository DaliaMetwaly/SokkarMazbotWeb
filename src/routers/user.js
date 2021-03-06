const express=require('express');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
var myParser = require("body-parser");
const { body, validationResult } = require('express-validator');
const another = require('../index');
const router=new express.Router();
const upload = require('../uploadMiddleware');
const Resize = require('../Resize');
var path=require('path');
var reg_info=require('../../public/dist/js/api/request');
router.use(myParser.urlencoded({extended : true}));
commonFunc=require('./commonFunc')
//=============================================
// DECLARING CUSTOM MIDDLEWARE
const ifLoggedin = (req,res,next) => {
    var list = {},
        rc = req.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    if(list.userToken){
        return res.redirect('/dashboard');
    }
    next();
};
//=============================================
//==================user.js===========================
//get all users
router.get('/users',commonFunc.ifNotLoggedin,async(req,res)=>{
    try
    {
        res.render('user/view.hbs', {});
    }
    catch(e)
    {
        res.status(500).send()

    }

});
//=============================================
//add user
router.get('/add_user',commonFunc.ifNotLoggedin,async (req, res) => {
    //API CALL
    res.render('user/add.hbs', {

    });
});
// //=============================================
// //edit user
router.get('/edit_user',commonFunc.ifNotLoggedin, (req, res) => {
	var id = req.query.id;
    res.render( 'user/edit.hbs',{id:id});
});
//=============================================

//===============================
module.exports=router;
