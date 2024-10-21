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
            res.redirect("/");
            console.log("Sucess");
         }else{
            res.redirect("/");
            console.log("Not sucess");
         } 
         res.end();
    })
})

app.post("/reg",encoder, function(req,res){

    var email=req.body.email;
    var password=req.body.password;

    console.log(email);
    console.log(password);

    connection.query("insert into loginuser(user_name,user_pass)values(?,?)",[email,password],function(error,results,fields){

        if(results.length>0){
            console.log("NOT");
        }else{
            console.log("SUCESS");
        }

        res.end();
    })

})


app.listen(4003);