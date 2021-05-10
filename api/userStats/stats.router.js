const {createStats,get,Update} = require('./stats.controller');
const router = require("express").Router();

router.post("/",createStats);
router.get("/:id",get);
router.patch("/:id",Update);

module.exports = router;