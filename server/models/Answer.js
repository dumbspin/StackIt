const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  description: String,
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Answer", answerSchema);
