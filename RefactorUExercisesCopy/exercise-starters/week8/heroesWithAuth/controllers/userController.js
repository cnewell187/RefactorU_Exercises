var User = require("../models/userModel.js");
var bcrypt = require('bcryptjs');

function login(req, res){
  console.log("Login POST PAYLOAD: " , req.body)
  User.findOne({
    email: req.body.email
  }, function(err, userDoc){
    if(err){
      console.error("The Error: ", err)
      res.status(500).json(err)
    }
    if(!userDoc){
      console.warn('No user found!');
      res.status(403).json({message : "Nope"})
    }
    else{
      console.info("auth.login:", userDoc)
      bcrypt.compare(req.body.password, userDoc.password, function(compareErr, matched){
        if(compareErr){
          console.error("The Error: ", err)
          res.status(500).json(err)
        }
        else if(!matched){
          console.warn("Password mismatch");
          res.status(403).json({message : "Nope"});
        }
        else{
          console.log("Password is correct")
          req.session.userId = userDoc._id;
          res.send({message : "Login Success!!!"});
        }
      })
    }
  })
}

function register(req, res){
  console.log(req.body)
  var newUserDocument = new User(req.body);
  newUserDocument.save(function(err, doc) {
      if (err) {
          console.log("The Error: " + err)
          return res.send(err)
      } else {
          console.log("A new user has been created!")
          return res.send(doc)
      }
  })
}

function logout(req, res){
    req.session.reset();
    res.redirect('/login.html');
}

//session will be the middleware that checks for a logged in user, it is middleware
function session (req, res, next){
 if(req.session.userId){
   console.log("the session function running")
   next();
 }
 else{
   res.redirect('/login.html');
 }

}

module.exports ={
  login:login,
  register: register,
  logout:logout,
  session:session,

}
