const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  text: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId, // Correct type for referencing another document.
    ref: 'User', // Assuming you want to create a reference to the User model.
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', noteSchema); // Correctly export as 'Note'.
