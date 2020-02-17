const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Person = mongoose.model('person', PersonSchema);
