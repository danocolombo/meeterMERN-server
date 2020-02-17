const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  meetingDate: {
    type: Date,
    required: true
  },
  meetingType: {
    type: String,
    required: true
  },
  facilitator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'people'
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'people'
  },
  meal: {
    type: String
  },
  mealCount: {
    type: Number
  },
  cafe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'people'
  },
  attendance: {
    type: Number
  },
  donations: {
    type: Number
  },
  notes: {
    type: String
  },
  groups: [
    {
      title: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      gender: {
        type: String
      },
      description: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Meeting = mongoose.model('meeting', MeetingSchema);
