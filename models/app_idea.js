const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({

    idea: String,
    description: String,
    requirements: String,
    languages: String,
    frameworks: {
        type: String,
        default: ""
    },
    difficulty: String

});

module.exports = mongoose.model('AppIdea', ideaSchema);