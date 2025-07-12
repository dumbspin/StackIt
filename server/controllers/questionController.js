const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
  try {
    const { title, description, tags, userId } = req.body;
    const newQuestion = new Question({ title, description, tags, createdBy: userId });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: "Failed to post question" });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("createdBy", "name").sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to get questions" });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate("createdBy", "name");
    if (!question) return res.status(404).json({ error: "Not found" });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Error fetching question" });
  }
};
