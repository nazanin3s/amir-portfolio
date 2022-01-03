const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer");
const mailgun = require("mailgun-js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));




app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/modeling", function(req, res) {
  res.sendFile(__dirname + "/modeling.html");
});
app.get("/modelings", function(req, res) {
  res.sendFile(__dirname + "/modelings.HTML");
  });
app.get("/rendering", function(req, res) {
  res.sendFile(__dirname + "/RENDERING.HTML");
});

app.get("/renderings", function(req, res) {
  res.sendFile(__dirname + "/renderings.html");
});

app.get("/vr360", function(req, res) {
  res.sendFile(__dirname + "/360render.html");
});
app.get("/drawing", function(req, res) {
  res.sendFile(__dirname + "/drawings.html");
});
app.get("/drawings", function(req, res) {
  res.sendFile(__dirname + "/plans.html");
});
app.get("/animations", function(req, res) {
  res.sendFile(__dirname + "/videos.html");
});
app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});


app.post("/contact", function(req, res){
  console.log(req.body);
const email = req.body.emailNAme;
const nAme = req.body.nameName;
const message = req.body.textName;

const mg = mailgun({apiKey: apikey, domain: DOMAIN});
const data = {
	from: email,
	to: 'am.amirmohseni@gmail.com',
  subject: 'website email',
	text: "Name: " + nAme + " Message: " + message
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
res.sendFile(__dirname + "/contact.html");
});
app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/about.html");
});


app.get("/project1", function(req, res) {
  res.sendFile(__dirname + "/work.html");
});
app.get("/project2", function(req, res) {
  res.sendFile(__dirname + "/prj2.html");
});
app.get("/project3", function(req, res) {
  res.sendFile(__dirname + "/prj3.html");
});
app.get("/project4", function(req, res) {
  res.sendFile(__dirname + "/prj4.html");
});
app.get("/project5", function(req, res) {
  res.sendFile(__dirname + "/prj5.html");
});
app.get("/project6", function(req, res) {
  res.sendFile(__dirname + "/prj6.html");
});
app.get("/project7", function(req, res) {
  res.sendFile(__dirname + "/prj7.html");
});
app.get("/project8", function(req, res) {
  res.sendFile(__dirname + "/prj8.html");
});
app.get("/project9", function(req, res) {
  res.sendFile(__dirname + "/prj9.html");
});
app.get("/project10", function(req, res) {
  res.sendFile(__dirname + "/prj10.html");
});
app.get("/project11", function(req, res) {
  res.sendFile(__dirname + "/prj11.html");
});
app.get("/project12", function(req, res) {
  res.sendFile(__dirname + "/prj12.html");
});
app.get("/project13", function(req, res) {
  res.sendFile(__dirname + "/prj13.html");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
