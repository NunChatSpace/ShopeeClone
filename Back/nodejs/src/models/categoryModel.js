const mongoose = require('mongoose')

const categoryMenuSchema = new mongoose.Schema({
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
    categoryMenuSchema
}