const express=require('express');
const myParser = require("body-parser");
const router=new express.Router();
const commonFunc=require('./commonFunc');

router.use(myParser.urlencoded({extended : true}));
//==================mealType=========================
//===================================================
//get all meal Types
router.get('/mealtype',commonFunc.ifNotLoggedin,async(req,res)=>{
    try
    {
        res.render('mealtype/view.hbs', {});
    }
    catch(e)
    {
        res.status(500).send()
    }
});
//===================================================
//add meal type
router.get('/mealtype/add',commonFunc.ifNotLoggedin,async (req, res) => {
    res.render('mealtype/add.hbs', {});
});
//===================================================
//edit meal type
router.get('/mealtype/edit',commonFunc.ifNotLoggedin, (req, res) => {
	var id = req.query.id;
    res.render( 'mealtype/edit.hbs',{id:id});
});
//=========================================================
module.exports=router;
