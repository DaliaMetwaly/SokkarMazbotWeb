const express=require('express');
const myParser = require("body-parser");
const router=new express.Router();
const commonFunc=require('./commonFunc');
router.use(myParser.urlencoded({extended : true}));
//==================mealType=========================
//===================================================
//get all meal Types
router.get('/suggestedmeal',commonFunc.ifNotLoggedin,async(req,res)=>{
    try
    {
        res.render('suggestedmeal/view.hbs', {});
    }
    catch(e)
    {
        res.status(500).send()
    }
});
//===================================================
//add meal type
router.get('/suggestedmeal/add',commonFunc.ifNotLoggedin,async (req, res) => {
    res.render('suggestedmeal/add.hbs', {});
});
//===================================================
//edit meal type
router.get('/suggestedmeal/edit',commonFunc.ifNotLoggedin, (req, res) => {
	var id = req.query.id;
    res.render( 'suggestedmeal/edit.hbs',{id:id});
});
//=========================================================
module.exports=router;
