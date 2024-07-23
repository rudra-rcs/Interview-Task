require("dotenv").config();
const mongoose=require("mongoose");

const mongo=process.env.MONGO_URL;
mongoose.connect(mongo).then(()=>{
    console.log("DB Connected!!!");
}).catch((error)=>{
    console.log(error);
})