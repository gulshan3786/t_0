import express from "express";
import db from "./db.mjs";
import router from "./route.mjs";
import session from "express-session";

const app=express();
app.set('view engine','ejs')
app.use(
  session({
    secret: "gulshan@123",
    resave: false,
    saveUninitialized: true,
  })
);
const port=3000;

  app.use("/",router);
  app.listen(port,(req,res)=>{
    console.log(`the app is  listening on port no ${port}`)
  })
