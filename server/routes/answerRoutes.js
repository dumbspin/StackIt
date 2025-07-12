const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  addAnswer,
  getAnswersByQuestionId
} = require("../controllers/answerController");

router.post("/", auth,addAnswer);
router.get("/:id", getAnswersByQuestionId); // id = questionId

module.exports = router;
