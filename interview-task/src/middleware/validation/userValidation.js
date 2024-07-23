const {body,validationResult}=require("express-validator");

validator=[
    [
            [body("user_name")
            .trim()
            .notEmpty().withMessage("User name should not be Empty!!")
            .isLength({min:3}).withMessage("user name should be greater than 3 charaters")
           

            [body("user_id")
            .trim()
            .notEmpty().withMessage("User id should not be Empty!!")],

            [body("contact_no")
            .trim()
            .notEmpty().withMessage("Contact number should not be Empty!!")
            .isMobilePhone().withMessage("invalid mobile number")
            .isInt().withMessage("Mobile Number Should be Digit Only")
            .isLength({min:10}).withMessage("mobile number length should be than 10 digit")],

            [body("email")
            .trim()
            .notEmpty().withMessage("Email should not be Empty!!")
            .normalizeEmail()
            .isEmail().withMessage("invalid email")
            .isLength({min:6})
            .withMessage("Email Id should be greater than 6 Characters")],

            [body("password")
            .trim().
            notEmpty().withMessage("Password should not be Empty!!")
            .isLength({min:5,max:20}).withMessage("password should be 5 to 20 characters")
            .matches(/[A-Z]/g)
            .withMessage("Password must contain an upper case letter")
            .matches(/[a-z]/g)
            .withMessage("Password must contain a lower case letter")
            .matches(/[0-9]/g)
            .withMessage("Password must contain a number")
            .not()
            .matches(/\s/g)
            .withMessage("Please do not use space characters")
            .custom((value, { req }) => {
                if (value !== req.body.cpassword) {
                  throw new Error("Password confirmation password does not match password");
                }
                return true;
              })
            ],

            [body("gender")
            .trim()
            .notEmpty()
            .withMessage("Select Gender!!")],

            [body("address")
            .trim()
            .notEmpty()
            .withMessage("Address should not be Empty!!")
            .isLength({min:3}).withMessage("address should be greater than 3 Characters")],

            [body("sign")
            .trim().notEmpty()
            .withMessage("Sign should not be Empty!!")],



    ]
]
]

errorList= (req,res,next)=>{
    
    const result= validationResult(req);
    if(!result.isEmpty()){
        // console.log(result.array());
        // return res.json(result.array());
        const alert=result.array();
        res.render("user",{alert});
    }
    else{
        next();
    }
    

   

}
   
module.exports={validator,errorList};  

