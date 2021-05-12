const {createUser,getusers,getuserbyid,login} = require('./user.controller');
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/create",createUser);
router.post("/login",login);
router.get("/getusers",checkToken,getusers);
router.get("/getuserbyid/:id",getuserbyid);

module.exports = router;