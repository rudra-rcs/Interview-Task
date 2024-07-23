const {body,validationResult}=require("express-validator");

validator=[
    [
        [body("email")
            .trim()
            .notEmpty().withMessage("Email should not be Empty!!")
            .normalizeEmail()
            .isEmail().withMessage("invalid email")
            .isLength({min:6})
            .withMessage("Email Id should be greater than 6 Characters")],
            
        [body("password").notEmpty().withMessage("password should not be Empty!!")],
    ]
]

errorList= (req,res,next)=>{
    
    const result= validationResult(req);
    if(!result.isEmpty()){
        // console.log(result.array());
        // return res.json(result.array());
        const alert=result.array();
        res.render("login",{alert});
    }
    else{
        next();
    }
    

   

}

module.exports={validator,errorList};
   
    

