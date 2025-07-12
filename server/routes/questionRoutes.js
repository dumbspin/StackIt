const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  createQuestion,
  getAllQuestions,
  getQuestionById
} = require("../controllers/questionController");

router.get("/", getAllQuestions);
router.post("/", auth,createQuestion);
router.get("/:id", getQuestionById);

module.exports = router;
