const {createUser,getusers,getuserbyid,login} = require('./user.controller');
const { tokenValidator } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/create",createUser);
router.post("/login",login);
router.get("/getusers",tokenValidator,getusers);
router.get("/getuserbyid/:id",getuserbyid);

module.exports = router;