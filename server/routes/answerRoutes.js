const express = require("express");
const router = express.Router();
const {
  addAnswer,
  getAnswersByQuestionId
} = require("../controllers/answerController");

router.post("/", addAnswer);
router.get("/:id", getAnswersByQuestionId); // id = questionId

module.exports = router;
