const {update,createUser,getusers,getuserbyid,getuserbystatus,getUserbyLocationAndCategory,getuserByLocation,getuserByCategory,getuserBySubCategory,getuserBylocationandsubcategory,getuserBycategoryandsubcategory,getUsersByLocationAndCategoryAndSubcategory} = require('./user.controller');
const router = require("express").Router();

router.post("/",createUser);
router.get("/",getusers);
router.get("/getusersbyid/:id",getuserbyid);
router.get("/getusersbystatus/:status",getuserbystatus);
router.get("/getuserbylocationandcategory/:location&:category",getUserbyLocationAndCategory);
router.get("/getuserbylocation/:location",getuserByLocation);
router.get("/getuserbycategory/:category",getuserByCategory);
router.get("/getuserbysubcategory/:subcategory",getuserBySubCategory);
router.get("/getuserbylocationandsubcategory/:location&:subCategory",getuserBylocationandsubcategory);
router.get("/getuserbycategoryandsubcategory/:category&:subCategory",getuserBycategoryandsubcategory)
router.get("/getusersbylocationandcategoryandsubcategory/:location&:category&:subCategory",getUsersByLocationAndCategoryAndSubcategory);
router.patch("/:id",update);

module.exports = router;