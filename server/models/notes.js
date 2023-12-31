const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  foods: { type: String, required: true },
  userId: {
    type: String,
    required: true,
  },
  comments: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Notes", NotesSchema);
