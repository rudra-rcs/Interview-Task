const userModel=require("../models/users");
const fs=require("fs");
const path=require("path");


const getUser=async(req,res)=>{
    try{
        const data=await userModel.find({});
        res.status(200).send(data);

    }catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}




const addUser=  async(req,res)=>{
  
    try{
       const data= await userModel.create({
            user_id:req.body.user_id,
            name:req.body.name,
            contact_no:req.body.contact_no,
            email:req.body.email,
            password:req.body.password,
            gender:req.body.gender,
            address:req.body.address,
           
            village_pincode:req.body.village_pincode,

        });

        res.status(201).send(data);
    }catch(error){
        console.log(error);
        res.status(400).send(error);

    }
}

const updateUser=async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await userModel.findByIdAndUpdate({_id},req.body,{new:true});
        res.status(200).send(data);
        console.log(data);

    }catch(error){
        console.log(error);
        res.status(400).send(error);

    }
}

const deleteUser=async(req,res)=>{
    try{
        const _id=req.params.id;
        const data=await userModel.findByIdAndDelete({_id});
       
        res.status(200).send("User Deleted!!!");
        console.log(data);

    }catch(error){
        console.log(error);
        res.status(400).send(error);

    }
}

module.exports={getUser,addUser,updateUser,deleteUser,};