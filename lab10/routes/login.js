const express = require('express');
const router = express.Router();
const data = require("../data");
const users = data.users;
var passport = require('passport');


router.get("/", (req, res) => { 
    if(req.isAuthenticated()){
        res.redirect('/private');
    }else{
         res.render("login",{error:req.flash().error});
    }
});

router.post('/login',
    passport.authenticate('local',{
        successRedirect: '/private',
        failureRedirect: '/',
        failureFlash :  true
    })
);

router.all('/private', isLoggedIn);
router.get("/private", (req, res) => {
    res.render("private",{user:req.user});
    //res.status(200).json({user:req.user});
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect('/');
}

module.exports = router;