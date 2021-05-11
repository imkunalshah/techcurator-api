const {update,createUser,getusers,getuserbyid,login} = require('./user.controller');
const router = require("express").Router();

router.post("/create",createUser);
router.post("/login",login);
router.get("/getusers",getusers);
router.get("getuserbyid/:id",getuserbyid);
// router.post("/",createUser);
// router.get("/",getusers);
// router.get("/getusersbyid/:id",getuserbyid);
// router.get("/getusersbystatus/:status",getuserbystatus);
// router.get("/getuserbylocationandcategory/:location&:category",getUserbyLocationAndCategory);
// router.get("/getuserbylocation/:location",getuserByLocation);
// router.get("/getuserbycategory/:category",getuserByCategory);
// router.get("/getuserbysubcategory/:subcategory",getuserBySubCategory);
// router.get("/getuserbylocationandsubcategory/:location&:subCategory",getuserBylocationandsubcategory);
// router.get("/getuserbycategoryandsubcategory/:category&:subCategory",getuserBycategoryandsubcategory)
// router.get("/getusersbylocationandcategoryandsubcategory/:location&:category&:subCategory",getUsersByLocationAndCategoryAndSubcategory);
// router.patch("/:id",update);

module.exports = router;