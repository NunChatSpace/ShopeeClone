const mongoose = require('mongoose')

const recommendMenuSchema = new mongoose.Schema({
    image: {
        type: String
    },
    text: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = {
    recommendMenuSchema
}