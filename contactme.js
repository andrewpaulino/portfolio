var express = require('express')
var router = express.Router()
const nodemailer = require('nodemailer');
var firebase = require("firebase");
// TODO: Replace with your project's customized code snippet
var config = {
   //ENTER FIREBASE INFo
  };
  firebase.initializeApp(config);
  const ref = firebase.database().ref()
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.post('/', function (req, res) {
  const info = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
  }
  var firebaseRef = firebase.database().ref('contactMe')
  
    firebaseRef.push({
        email: info.email,
        full_name: info.firstName + ' ' + info.lastName
  
      }, function(error) {
        if (error) {
        console.log("Data could not be saved." + error);
        } else {
        res.redirect('/thanks')
        }
        });



})






// define the about route
router.get('/', function (req, res) {
    res.render('contact')
})
module.exports = router