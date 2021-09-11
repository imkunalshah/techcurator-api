const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    topic: {
        type:String
    },
    difficulty_level: {
        type:String
    },
    question: {
        type:String,
        unique: true,
    },
    option_1: {
        type:String
    },
    option_2: {
        type:String
    },
    option_3: {
        type:String
    },
    option_4: {
        type:String
    },
    correct_option: {
        type:String
    }
});

module.exports = mongoose.model('questions',questionSchema);