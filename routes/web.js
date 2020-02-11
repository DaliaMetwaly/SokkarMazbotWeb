const express = require('express');
const router = express.Router();
commonFunc=require('../src/routers/commonFunc')
// const City=require('../src/models/city');
//===========Dashboard========================

// DECLARING CUSTOM MIDDLEWARE
router.get('/',commonFunc.ifNotLoggedin,(req, res) => {
    res.redirect('/dashboard');

});

// END OF CUSTOM MIDDLEWARE
router.get('/login', (req,res,next) => {
    return res.render('auth/login-register.hbs');

});
// ROOT PAGE
router.get('/dashboard', commonFunc.ifNotLoggedin, (req,res,next) => {
    res.render('index.hbs');

});// END OF ROOT PAGE

// LOGOUT
router.get('/logout',(req,res)=>{
    //session destroy
    res.clearCookie('userToken');
    res.clearCookie('userinfo');

    res.redirect('/login');
});
//===========User========================
// router.get('/',ifNotLoggedin,(req, res) => {
//     res.redirect('/dashboard');
//
// });
// //===========Country========================
router.get('/country', (req, res) => {
	res.render('country/view.hbs', {});
});
//
// router.get('/country/edit', (req, res) => {
// 	 var name = req.query.name
// 	 var id = req.query.id
// 	 return res.render( 'country/edit', {name:name,id:id})
//
// });
//
router.get('/country/add', (req, res) => {
	res.render('country/add.hbs', {});
});
// //==========================================
//
// //=============Category=====================
// router.get('/category', (req, res) => {
// 	res.render('categories/view.hbs', {});
// });
//
// router.get('/category/add', (req, res) => {
// 	res.render('categories/add.hbs', {});
// });
//
// router.get('/category/edit', (req, res) => {
// 	var id = req.query.id
// 	Category.findById(id).then(item => {
// 		 res.render( 'categories/edit.hbs',{id:item._id,name:item.name,shortDescription:item.shortDescription,image:item.image})
//       }).catch(err => {
//         res.status(400).send();
//       });
// });
// //===========================================
//
// //==============City=========================
// router.get('/city', (req, res) => {
// 	res.render('city/view.hbs', {});
// });
//
// router.get('/city/edit', (req, res) => {
//
// 	 var id = req.query.id
// 	 City.findById(id).then(item => {
// 		return res.render( 'city/edit',{id:item._id,name:item.name,country:item.country})
//       }).catch(err => {
//         res.status(400).send();
//       });
//
// });
//
// router.get('/city/add', (req, res) => {
// 	res.render('city/add.hbs', {});
// });
// //==========================================
//
// //============diabetesType==================
// router.get('/diabetestype', (req, res) => {
// 	res.render('diabetestype/view.hbs', {});
// });
//
// router.get('/diabetestype/edit', (req, res) => {
// 	 var name = req.query.name
// 	 var id = req.query.id
// 	 return res.render( 'diabetestype/edit', {name:name,id:id})
//
// });
//
// router.get('/diabetestype/add', (req, res) => {
// 	res.render('diabetestype/add.hbs', {});
// });
// //===========================================

module.exports = router;