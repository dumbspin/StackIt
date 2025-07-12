const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getQuestionById
} = require("../controllers/questionController");

router.get("/", getAllQuestions);
router.post("/", createQuestion);
router.get("/:id", getQuestionById);

module.exports = router;
