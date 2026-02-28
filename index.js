const express = require("express");
const path = require("path");
let app = express();
let port = 8080;
app.listen(port,(req,res)=>{
    console.log("yes");    
})
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     let followers = ["Amit","Rohit","Ajay","Mohit"];
//     res.render("insta.ejs",{username,followers});
// });

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.get("/ig/:username",(req,res)=>{
    const { username } = req.params;
    const instadata = require("./data.json");
    const Data = instadata[username];
    console.log(Data);
    if (Data){
        res.render("insta.ejs",{Data});
    }
    else {
        res.render("error.ejs");
    }
});