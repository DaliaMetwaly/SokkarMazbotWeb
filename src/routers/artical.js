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
//=============================================
// DECLARING CUSTOM MIDDLEWARE
const ifNotLoggedin = (req, res, next) => {
    var list = {},
        rc = req.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    if(!list.userToken){

        return res.redirect('/login');
    }
    next();
};

//===================================================
//==================recipe===========================
//get all recipe artical
router.get('/recipe',ifNotLoggedin,async(req,res)=>{

    try
    {
        res.render('articles/recipesforu/view.hbs', {});
    }
    catch(e)
    {
        res.status(500).send()

    }

});
//===================================================
//add recipe artical
router.get('/add_recipe',ifNotLoggedin,async (req, res) => {
    //API CALL
    res.render('articles/recipesforu/add.hbs', {

    });
});
//===================================================
//edit recipe artical
router.get('/edit_recipe',ifNotLoggedin, (req, res) => {
	var id = req.query.id;
    res.render( 'articles/recipesforu/edit.hbs',{id:id});
});
//====================finished recipe ================


//===================================================
//==================miscellaneous===========================
//get all recipe artical
router.get('/recipe',ifNotLoggedin,async(req,res)=>{

    try
    {
        res.render('articles/miscellaneous/view.hbs', {});
    }
    catch(e)
    {
        res.status(500).send()

    }

});
//===================================================
//add recipe artical
router.get('/add_user',ifNotLoggedin,async (req, res) => {
    //API CALL
    res.render('articles/miscellaneous/add.hbs', {

    });
});
//===================================================
//edit recipe artical
router.get('/edit_user',ifNotLoggedin, (req, res) => {
    var id = req.query.id;
    res.render( 'articles/miscellaneous/edit.hbs',{id:id});
});
//====================finished recipe ================
//===================================================
//==================medical===========================
//get all medical artical
router.get('/medical',ifNotLoggedin,async(req,res)=>{

    try
    {
        res.render('articles/medical/view.hbs', {});
    }
    catch(e)
    {
        res.status(500).send()

    }

});
//===================================================
//add medical artical
router.get('/add_medical',ifNotLoggedin,async (req, res) => {
    //API CALL
    res.render('articles/medical/add.hbs', {

    });
});
//===================================================
//edit medical artical
router.get('/edit_medical',ifNotLoggedin, (req, res) => {
    var id = req.query.id;
    res.render( 'articles/medical/edit.hbs',{id:id});
});
//====================finished recipe ================
//===============================
module.exports=router;
