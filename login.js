const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const app = express();

app.use("/assets",express.static("assets"));

const connection =mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "9933",
    database: "nodejs"
});

connection.connect(function(error){
    if(error) throw error
    else console.log("connected")
});

app.get("/", function(req,res){

    res.sendFile(__dirname + "/login.html");
})

app.post("/",encoder, function(req,res){

    var email = req.body.email;
    var password = req.body.password;

    console.log(email);
    console.log(password);

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[email,password], function(error,results,fields){
         if(results.length > 0){
            res.redirect("/");
            console.log("Sucess");
         }else{
            res.redirect("/");
            console.log("Not sucess");
         } 
         res.end();
    })
})


app.listen(4003);