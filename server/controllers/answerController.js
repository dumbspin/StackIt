const Answer = require("../models/Answer");

exports.addAnswer = async (req, res) => {
  try {
    const { description, questionId, userId } = req.body;
    const answer = new Answer({ description, questionId, createdBy: userId });
    await answer.save();
    res.status(201).json(answer);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit answer" });
  }
};

exports.getAnswersByQuestionId = async (req, res) => {
  try {
    const answers = await Answer.find({ questionId: req.params.id }).populate("createdBy", "name");
    res.json(answers);
  } catch (err) {
    res.status(500).json({ error: "Failed to load answers" });
  }
};
