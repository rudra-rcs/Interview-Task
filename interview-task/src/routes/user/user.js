const router=require("express").Router();
const userController=require("../../controllers/user-controller");
const {validator,errorList}=require("../../middleware/validation/validation");


router.post("/user",validator,errorList,userController.addUser);
router.get("/user",userController.getUser);
router.put("/user/:id",userController.updateUser);
router.delete("/user/:id",userController.deleteUser);



module.exports=router;