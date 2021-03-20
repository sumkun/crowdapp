const express    = require("express");
const app        = express();
const connection = require("./mysqlConn");
const notifier   = require("node-notifier");
const alert      = require('alert');

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))



module.exports.signUp = function(req, res)
{
  var name = req.body.name;
  var city = req.body.city;
  var contact = req.body.MoNo;
  var email = req.body.email;
  var psw = req.body.psw;
  var reptpsw = req.body.pswrepeat;

  console.log("This is auth1");
  console.log("Message "+psw+"\npass = "+reptpsw);
  if(email=="" || psw=="" || reptpsw=="")
  {
    alert("Please fill All field");
  }
  else if(psw!=reptpsw)
  {
    alert("Password not matched");
  }
  else if(psw==reptpsw)
  {
    var sql = "SELECT email,contact FROM crowdUser WHERE email = ? or contact = ?";

    connection.query(sql, [email,contact], function (error, data, fields) {
        if (data[0]!=undefined) 
        {
          alert("Email/Contact Already registere'd");
        }
        else
        {
          console.log("Success");
          var sql = "INSERT INTO crowdUser (name, city, contact, email, password) VALUES (?,?,?,?,?)";

          connection.query(sql, [name,city,contact,email,psw], function (error, data, fields)
          {
            if (error) throw error;
            alert("Successfully Registered");
              //console.log(data[0]);
          });
        }
      });
  }
}

module.exports.login = function(req, res)
{
  var email = req.body.uname;
  var psw = req.body.psw;

  var post = [email]

    console.log(email+" = Adhar Auth login User name");
    //res.redirect("./../digilocker_login_page.html");
    if(email=="" || psw=="")
    {
      alert("Please fill All field");
    }
    else
    {    
      var sql = "SELECT email,password FROM crowdUser WHERE email = ? and password = ?";

    connection.query(sql, [email,psw], function (error, data, fields) {
        if (data[0]==undefined) 
        {
          //notifier.notify("Wrong User id or Password");
          alert("Not a register user /\nWrong User id or Password");
        }
        else
        {
          //alert("Login Successfully");
          //req.session.userName = email;
          console.log(data[0]);
          //console.log("This is Session ********** = "+req.session.userName);
          res.send(post);
        }
      });
    }

}

module.exports.donationForm = function(req, res)
{
  var name = req.body.name;
  var city = req.body.city;
  var contact = req.body.contact;
  var email = req.body.email;
  //alert(req.body.name);

  var post = [email]

  if(name=="" || city=="" || contact=="" || email=="")
  {
    alert("Please fill All field");
  }
  else
  {
          console.log("Success");
          var sql = "INSERT INTO donationForm (name, city, contact, email) VALUES (?,?,?,?)";

          connection.query(sql, [name,city,contact,email], function (error, data, fields)
          {
            if (error) throw error;
            alert("Data Store'd Successfully");
            res.send(post);
              //console.log(data[0]);
          });


  }


}