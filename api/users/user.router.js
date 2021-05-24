const {createUser,getusers,getuserbyid,login,update,getuserbyphone} = require('./user.controller');
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/create",createUser);
router.post("/login",login);
router.get("/getusers",getusers);
router.get("/getuserbyid/:id",getuserbyid);
router.put("/updateuser/:id",checkToken,update);
router.get("/getuserbyphone/:phone",getuserbyphone)
module.exports = router;