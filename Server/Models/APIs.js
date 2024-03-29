const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const APISchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
    },
    code: {
        type: String,
        required: true
    },
    tags: [String],
    type: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    }, // false
    user: {
        name: String,
        email: String
    },
    language: {
        lang: {
            type: String,
            required: true
        },
        database: String
    }
});

module.exports = mongoose.model('APIs', APISchema);