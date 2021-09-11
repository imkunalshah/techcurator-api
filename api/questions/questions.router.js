const { getQuestions ,fetchQuestions} = require('./questions.controller');
const router = require("express").Router();

router.get("/getQuestions",fetchQuestions,getQuestions);

module.exports = router;