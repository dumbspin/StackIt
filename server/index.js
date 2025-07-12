const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("StackIt API running"));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));


const questionRoutes = require("./routes/questionRoutes");
const answerRoutes = require("./routes/answerRoutes");

app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
