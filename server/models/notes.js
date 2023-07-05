const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  foods: { type: String, required: true },
  comments: { type: String, required: true },
});

module.exports = mongoose.model("Notes", NotesSchema);
