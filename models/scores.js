const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        trim: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Scores', ScoreSchema);