const {createCategory,Delete,Update,get} = require('./category.controller');
const router = require("express").Router();

router.post("/",createCategory);
router.delete("/:categoryName",Delete);
router.patch("/:categoryName",Update);
router.get("/",get);

module.exports = router;