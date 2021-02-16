// 'https://cdn.boomcdn.com/libs/animate-css/3.7.0/animate.css'

//importing modules (libraries)
var path = require('path');
var express = require('express');
var ejs = require("ejs")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser");
const secret  = require('./config/secret');
const passport = require('passport');
const flash =  require('connect-flash');
const session = require('express-session');
const nodemailer = require('nodemailer');
const multiparty = require("multiparty");
// require("dotenv").config();
const {config} = require('dotenv');

//declaration and creation of express app
var app = express();

//------------- Creating database---------
app.use(bodyParser.json())

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to mongodb
const mongoose = require('mongoose');
// useFindAndModify set to false
mongoose.set('useFindAndModify', false);
// use create index set to true
mongoose.set('useCreateIndex', true);

// mongoose.connect(secret.process.env.databaseURL, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });


module.exports = () => {
  config(); //invoking the dotenv config here
  const uri = process.env.databaseURL;
 
  connect(uri, {
        //  dbName: process.env.DB_NAME,
        //  user: process.env.DB_USER,
        //  pass: process.env.DB_PASS,
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true
     })
         .then(() => {
             console.log('Connection estabislished with MongoDB');
         })
         .catch(error => console.error(error.message));
 }


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are already connected to the server database")
});

// try {
//   mongoose.connect(MONGODB_URI || secret.databaseURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }, () =>
//     console.log("We are already connected to the server database"));
// } catch (error) {
//   console.log("Could not connect to the server");
// }

// -----------creation of database ends----------------------


//-----------------settting view up engines---------
// view engine setup
// using ejs template
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

// configuring the engines
// app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// -----------Setting up of view engine ends-----------


//helps us to activate or gives permission to the server to know the user 
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
// -----------------------session ends---------------------------

// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 

//this enables us to make use of css js and images on the website
app.use('/', express.static('public'));

//configuration of the routes 
var PageRoutes = require('./routes/PageRoutes');
app.use('/', PageRoutes);

const userRoute = require('./routes/userRegRoutes');
app.use('/auth', userRoute)

// const postRoute = require('./routes/postRoute');
// app.use('/post', postRoute)

const adminRoutes = require('./routes/adminRoute')
app.use('/admin', adminRoutes );



//configuring the listener and the declaration of port

app.listen(secret.PORT, () => {
    console.log('This application is already running on port ' + secret.PORT);
});



// POST route from contact form
// const GMAIL_USER = process.env.GMAIL_USER
// const GMAIL_PASS = process.env.GMAIL_PASS

// app.post('/contact-us', (req, res) => {

  // Instantiate the SMTP server
  // const smtpTrans = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: GMAIL_USER,
  //     pass: GMAIL_PASS
  //   }
  // })

  // Specify what the email will look like
  // const mailOpts = {
  //   from: 'Your sender info here', // This is ignored by Gmail
  //   to: GMAIL_USER,
  //   subject: 'New message from contact form at NLCFFUTA.org',
  //   text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  // }

  // Attempt to send the email
//   smtpTrans.sendMail(mailOpts, (error, response) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send("Something went wrong.");
//     } else {
//       res.status(200).send("Email successfully sent to recipient!");
//     }
//   })
// })



// https://nodemailer-vic-lo.herokuapp.com/send

// const sendMail = (mail) => {
  //1.
  // fetch("C:\Users\Enoch\nodeApplication\Nlcffuta", {
    // method: "post", //2.
    // body: mail, //3.

//   }).then((response) => {
//     return response.json();
//   });
// };

// const transporter = nodemailer.createTransport({
//   host: "smtp.live.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });


// verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });


// app.post("/send", (req, res) => {
//   //1.
//   let form = new multiparty.Form();
//   let data = {};
//   form.parse(req, function (err, fields) {
//     console.log(fields);
//     Object.keys(fields).forEach(function (property) {
//       data[property] = fields[property].toString();
//     });

    //2. You can configure the object however you want
    // const mail = {
    //   from: data.name,
    //   to: process.env.EMAIL,
    //   subject: data.subject,
    //   text: `${data.name} <${data.email}> \n${data.message}`,
    // };

    //3.
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Something went wrong.");
//       } else {
//         res.status(200).send("Email successfully sent to recipient!");
//       }
//     });
//   });
// });
