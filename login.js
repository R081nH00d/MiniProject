const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const app = express();

//app.use(express.static(path.join(__dirname, "MINIPROJECT")));

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

    res.sendFile(__dirname + "/prj.html");
    //res.sendFile(__dirname + "/login.html");
})

app.post("/login", function(req,res){

    res.sendFile(__dirname + "/login.html")
})

app.get("/signup", function(req,res){

    res.sendFile(__dirname + "/signup.html")
})

app.get("/candle", function(req,res){

    res.sendFile(__dirname + "/candel.html")
})

app.get("/home", function(req,res){

    res.sendFile(__dirname + "/prj.html")
})


app.get("/pdf", function(req,res){

    res.sendFile(__dirname + "/pdfmini.html")
})

app.get("/charts", function(req,res){

    res.sendFile(__dirname + "/charts.html")
})

app.get("/markets", function(req,res){

    res.sendFile(__dirname + "/Markets.html")
})

/*app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname,  "signup.html"));
});*/

app.post("/",encoder, function(req,res){

    var email = req.body.email;
    var password = req.body.password;

    console.log(email);
    console.log(password);

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[email,password], function(error,results,fields){
         if(results.length > 0){
            res.redirect("/user");
            console.log("Sucess");
         }else{
            res.redirect("/");
            console.log("Not sucess");
         } 
         res.end();
    })
})

app.get("/user", function(req, res) {
    res.sendFile(__dirname + "/user.html"); // Serve the user.html file when /user is accessed
});


app.post("/reg",encoder, function(req,res){

    var email=req.body.email;
    var password=req.body.password;

    console.log(email);
    console.log(password);

    connection.query("insert into loginuser(user_name,user_pass)values(?,?)",[email,password],function(error,results,fields){

        if(results.length>0){
            console.log("NOT");
            res.redirect("/signup");

        }else{
            console.log("SUCESS");
            res.redirect("/sign");
        }

        res.end();
    })

})

app.get("/sign", function(req, res) {
    res.sendFile(__dirname + "/login.html"); // Serve the user.html file when /user is accessed
});



app.listen(4005);