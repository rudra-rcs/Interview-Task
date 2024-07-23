require('dotenv').config();
require("./src/db-connection/index");
const app=require("express")();
const path=require("path");
const express=require("express");
const cookieParser=require("cookie-parser");
const userRouter=require("./src/routes/user/user");
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(userRouter);
app.use(express.static('public'));
const port=process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})

module.exports = app;