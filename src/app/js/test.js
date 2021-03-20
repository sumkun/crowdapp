const express = require("express");
const path    = require("path");
const app     = express();
const conn    = require("./db/mysqlConn");
var cors = require('cors')
const port        = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const static_path = path.join(__dirname, "./")
const authenticateController = require("./db/userAuthintication");

//app.use(express.static(static_path));

//app.post("/db/adharAuth",adharAuth.auth);

/* app.post("/auth", (req, res) => {
    console.log(req.body.adhar);
}); */

var post = [
    {'message1':'Welcome'},
    {'message1':'to'},
    {'message1':'Angular'}
]



app.get("/post", (req, res) => {
    res.send(post);
});

app.use(cors());

app.post("/signUp",authenticateController.signUp);

app.post("/login",authenticateController.login);

app.post("/donationForm",authenticateController.donationForm);
/* app.post("/login", (req, res) => {

    res.render("/authenticateController.auth1");
}); */




app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})
