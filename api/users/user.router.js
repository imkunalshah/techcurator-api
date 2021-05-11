const {update,createUser,getusers,getuserbyid,login} = require('./user.controller');
const router = require("express").Router();

router.post("/create",createUser);
router.post("/login",login);
router.get("/getusers",getusers);
router.get("getuserbyid/:id",getuserbyid);

module.exports = router;