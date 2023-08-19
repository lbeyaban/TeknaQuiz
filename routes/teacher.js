var express = require('express');
var router = express.Router();
const passport = require('passport')

const controller = require('../controller')

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated() && req.user.yetki == 'Teacher') {
     next()
  }

  res.redirect('/users/login')

}


/* GET users listing. */
router.get('/', checkNotAuthenticated, function (req, res, next) {

  res.render('teacher/index', {

    title: "Teacher Sayfasi"

  })
  
});






module.exports = router;
