//importing modules (libraries)
var path = require("path");
var express = require("express");
var ejs = require("ejs")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser");
const secret  = require("./config/secret");
const passport = require("passport");
const flash =  require("connect-flash");
const session = require("express-session");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
// const { connect, connection } = require("mongoose");
// const {config} = require("dotenv");

//declaration and creation of express app
var app = express();

//------------- Creating database---------
app.use(bodyParser.json())

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
//-----------------settting view up engines---------
// view engine setup
// using ejs template
app.set("views", path.join( __dirname, "views"));
app.set("view engine", "ejs");

// configuring the engines
// app.use(logger("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// -----------Setting up of view engine ends-----------


//helps us to activate or gives permission to the server to know the user 
app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}));
// -----------------------session ends---------------------------

// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 

//this enables us to make use of css js and images on the website
app.use("/", express.static("public"));

//configuration of the routes 
var PageRoutes = require("./routes/PageRoutes");
app.use("/", PageRoutes);

const userRoute = require("./routes/userRegRoutes");
app.use("/auth", userRoute)

var contact = require("./model/contact");

const adminRoutes = require("./routes/adminRoute");
app.use("/admin", adminRoutes );


// connecting to mongodb
const mongoose = require('mongoose');
// useFindAndModify set to false
mongoose.set('useFindAndModify', false);
// use create index set to true
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.databaseURL, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
console.log('we are already connected to the server database');
app.listen(process.env.PORT, () => {
  console.log("This application is already running on port " , process.env.PORT);
});
}).catch(err => {
console.log('could not connect to mongoDB', err)
})




