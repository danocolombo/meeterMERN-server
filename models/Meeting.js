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
    worship: {
        type: String
    },
    facilitator: {
        type: String
    },
    supportRole: {
        type: String
    },
    meal: {
        type: String
    },
    mealCount: {
        type: Number
    },
    cafe: {
        type: String
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
